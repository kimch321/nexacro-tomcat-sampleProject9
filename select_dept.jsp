<%@ page contentType="text/html; charset=utf-8" %>
<%@ page language="java"%>
<%@ page import="java.util.*" %>
<%@ page import="java.io.*" %>
<%@ page import="java.sql.*"%>
<%@ page import="org.apache.commons.logging.*" %>
<%@ page import="com.nexacro.java.xapi.tx.*" %>
<%@ page import="com.nexacro.java.xapi.data.*" %>

<%

//PlatformData(비동기 통신으로 transaction callback 함수에 데이터 전송시 데이터를 담아서 전송할때 사용)
PlatformData pData = new PlatformData();

int nErrorCode = 0;
String strErrorMsg = "START";

/****** JDBC Connection  ******/

Connection conn = null;
Statement stmt = null;
ResultSet rs = null;


try{
	Class.forName("org.sqlite.JDBC");
	//String dbFile = "C:\\JAVA\\sqlite_LiteDB\\nexacro_sample_db.sqlite";	
	conn = DriverManager.getConnection("jdbc:sqlite:C:\\JAVA\\sqlite_LiteDB\\nexacro_sample_db.sqlite");
	stmt = conn.createStatement();
	String sql = "select * from TB_DEPT";
		
	rs = stmt.executeQuery(sql);

	//DataSet 생성 후 DataType 설정
	DataSet ds = new DataSet("out_dept");
	ds.addColumn("DEPT_CD", DataTypes.STRING, 2);
	ds.addColumn("DEPT_NAME", DataTypes.STRING, 50);

	//DataSet에 TB_DEPT 테이블에서 조회한 값 입력하기
	int row = 0;	
	while(rs.next()){
		row = ds.newRow();
		ds.set(row, "DEPT_CD", rs.getString("DEPT_CD"));
		ds.set(row, "DEPT_NAME", rs.getString("DEPT_NAME"));
	}
	// #1 dataset -> PlatformData
	pData.addDataSet(ds);// pData 객체에 DataSet ds를 입력	

	nErrorCode = 0;
	strErrorMsg = "SUCC";
}catch(ClassNotFoundException e){
	e.printStackTrace();
	nErrorCode = -1;
	strErrorMsg = e.getMessage();
}catch(SQLException e){
	e.printStackTrace();
	nErrorCode = -1;
	strErrorMsg = e.getMessage();
} finally {
/******** JDBC Close ********/
if( stmt != null ) try { stmt.close(); } catch(Exception e) {}
if ( conn != null ) try {conn.close(); } catch(Exception e) {}
}

// 에러코드와 에러메시지를 VariableList에 담아 클라이언트에 전송
VariableList varList = pData.getVariableList();
varList.add("ErrorCode", nErrorCode);
varList.add("ErrorMsg", strErrorMsg);


HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
res.setData(pData);

// Send data
res.sendData();

%>