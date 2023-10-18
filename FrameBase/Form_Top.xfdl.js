(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            this.set_titletext("Form_Top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00","5","5","195","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("ImageViewer00");
            obj.set_image("url(\'theme://images/img_WF_Nexacro.png\')");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu00","205","5","1070","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("gds_menu");
            obj.set_captioncolumn("MENU_NAME");
            obj.set_idcolumn("MENU_ID");
            obj.set_levelcolumn("MENU_LEVEL");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,50,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Top.xfdl", function() {

        this.Menu00_onmenuclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	// e객체의 id키가 MENU_LEVEL의 값을 가져오는 이유는 idcolumn에 MENU_LEVEL의 값을 매핑해서 이다.
        	var strID = e.id;
        	// gds_menu 데이터셋에서 MENU_ID 컬럼의 값 중 strID에 해당하는 값을 찾는다. 해당 값이 속해있는 row 중, FORM_URL 컬럼에 해당하는 셀의 값을 가져온다.
        	var strURL = objApp.gds_menu.lookup("MENU_ID", strID, "FORM_URL");

        	// mainframe안의 VFramsSet00 안의 HFrameSet00안의 LeftFrame의 form(즉 Form_Left를 가리킨다.)의 스크립트 중 fn_openForm을 호출한다.
        	objApp.mainframe.VFrameSet00.HFrameSet00.LeftFrame.form.fn_openForm(objApp, strID, strURL);
        	// LeftFrame.form으로 써야한다. LeftFrame.Form_Left는 안됨.
        	// objApp.mainframe.VFrameSet00.HFrameSet00.LeftFrame.Form_Left.fn_openForm(objApp, strID, strURL);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Menu00.addEventHandler("onmenuclick",this.Menu00_onmenuclick,this);
        };
        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
