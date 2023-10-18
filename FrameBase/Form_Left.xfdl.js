(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Left");
            this.set_titletext("Form_Left");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("Grid00","0","0","200","670",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("gds_menu");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",200,670,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Left.xfdl", function() {

        this.Grid00_oncelldblclick = function(obj,e)
        {
        	// 현재 실행중인 nexacro 인스턴스를 가져옵니다.
        	// objApp에는 현재 실행 중인 앱의 정보가 담겨 있습니다.
        	var objApp = nexacro.getApplication();

        	// objApp의 gds_menu 객체를 이용해서 클릭한 row(e.row)중 "MENU_ID"컬럼에 해당하는 셀의 값을 가져옵니다.
        	var strID = objApp.gds_menu.getColumn(e.row, "MENU_ID");

        	// objApp의 gds_menu 객체를 이용해서 클릭한 row(e.row)중 "FORM_URL"컬럼에 해당하는 셀의 값을 가져옵니다.
        	var strURL = objApp.gds_menu.getColumn(e.row, "FORM_URL");

        	this.fn_openForm(objApp, strID, strURL);
        };

        // p는 파라미터의 약자인 것으로 추측된다.
        this.fn_openForm = function(pObj, pID, pURL)
        {
        	// 파라미터로 받은 id의 길이가 0 이하. 즉, 파라미터가 제대로 전달되지 않았다면, 함수를 종료한다.
        	if(pID.length <= 0) return;
        	// obj의 mainframe의 VFrameSet의 HFrameSet의 WorkFrame의 formurl의 값을 전달받은 url로 한다.
        	// 사용자의 클릭 이벤트에 따라 url이 바뀐다.
        	pObj.mainframe.VFrameSet00.HFrameSet00.WorkFrame.set_formurl(pURL);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("Form_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
