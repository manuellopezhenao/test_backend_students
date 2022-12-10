"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[778],{778:(W,T,i)=>{i.r(T),i.d(T,{CoursesModule:()=>d});var b=i(6895),n=i(4006),_=i(7392),x=i(4144),f=i(7974),S=i(4385),F=i(455),p=i(6308),a=i(7155),Z=i(3683),U=i(366),y=i(1390),v=i(5861),L=i(1919),h=i(7274),e=i(4650),w=i(9668),N=i(625);function Y(r,t){if(1&r&&(e.TgZ(0,"div")(1,"i",11),e._uU(2),e.qZA()()),2&r){const o=e.oxw().$implicit;e.xp6(2),e.hij("The field needs ",o.requiredLength," characters")}}function E(r,t){1&r&&(e.TgZ(0,"div")(1,"i",11),e._uU(2,"This field is required"),e.qZA()())}function D(r,t){if(1&r&&(e.YNc(0,Y,3,1,"div",10),e.YNc(1,E,3,0,"div",10)),2&r){const o=t.$implicit;e.Q6J("ngIf",null==o?null:o.minlength),e.xp6(1),e.Q6J("ngIf",null==o?null:o.required)}}class u{constructor(t,o,s){this.data=t,this.dialog=o,this.coursesService=s,this.CreateForm=new n.cw({})}ngOnInit(){this.initForm()}initForm(){this.CreateForm=new n.cw({name:new n.NI(this.data?.name??"",[n.kI.required]),credits:new n.NI(this.data?.credits??"",[n.kI.required])})}submitForm(){if(this.CreateForm.valid){let t={c_id:this.data?.c_id,name:this.CreateForm.value.name.trim(),credits:this.CreateForm.value.credits};this.data?.c_id?this.coursesService.updateCourse(t).then(o=>{this.dialog.close(o?{success:!0,message:"Course Update Success"}:{success:!1,message:o.error})},o=>{this.dialog.close({success:!1,message:"Course Update Failed"})}):this.coursesService.createCourse(t).then(o=>{this.dialog.close(o?{success:!0,message:"Course Created Success"}:{success:!1,message:o.error})},o=>{this.dialog.close({success:!1,message:"Course Created Failed"})})}}cancel(){this.dialog.close({success:!0,message:"Canceled"})}}u.\u0275fac=function(t){return new(t||u)(e.Y36(h.WI),e.Y36(h.so),e.Y36(w.N))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-create-or-edit"]],decls:18,vars:3,consts:[["errorTailor","",3,"formGroup","submit"],[1,"m-6"],[1,"relative","z-0","mb-6","w-full","group"],["for","name",1,"peer-focus:font-medium","absolute","text-sm","text-gray-500","duration-300","transform","-translate-y-6","scale-75","top-3","-z-10","origin-[0]","peer-focus:left-0","peer-focus:text-blue-600","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-75","peer-focus:-translate-y-6"],["formControlName","name","type","text","name","name","id","name","placeholder","Name","required","",1,"block","py-2.5","px-0","w-full","text-sm","text-gray-900","bg-transparent","border-0","border-b-2","border-gray-300","appearance-none","focus:outline-none","focus:ring-0","focus:border-blue-600","peer",3,"controlErrorsTpl"],["for","credits",1,"peer-focus:font-medium","absolute","text-sm","text-gray-500","duration-300","transform","-translate-y-6","scale-75","top-3","-z-10","origin-[0]","peer-focus:left-0","peer-focus:text-blue-600","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-75","peer-focus:-translate-y-6"],["formControlName","credits","type","number","name","credits","id","credits","placeholder","Credits","required","",1,"block","py-2.5","px-0","w-full","text-sm","text-gray-900","bg-transparent","border-0","border-b-2","border-gray-300","appearance-none","focus:outline-none","focus:ring-0","focus:border-blue-600","peer",3,"controlErrorsTpl"],["type","submit",1,"bg-blue-500","hover:bg-blue-700","text-white","font-bold","py-2","px-4","rounded-full"],["type","button",1,"bg-red-500","hover:bg-red-700","text-white","font-bold","py-2","px-4","rounded-full",3,"click"],["name","","credits",""],[4,"ngIf"],[1,"text-red-600"]],template:function(t,o){if(1&t&&(e.TgZ(0,"form",0),e.NdJ("submit",function(){return o.submitForm()}),e.TgZ(1,"div",1)(2,"div",2)(3,"label",3),e._uU(4,"Name"),e.qZA(),e._UZ(5,"input",4),e.qZA(),e.TgZ(6,"div",2)(7,"label",5),e._uU(8,"Credits"),e.qZA(),e._UZ(9,"input",6),e.qZA(),e.TgZ(10,"div",2)(11,"button",7),e._uU(12," Add "),e.qZA(),e.TgZ(13,"button",8),e.NdJ("click",function(){return o.cancel()}),e._uU(14," Cancel "),e.qZA()()()(),e.YNc(15,D,2,2,"ng-template",null,9,e.W1O)),2&t){const s=e.MAs(16),l=e.MAs(17);e.Q6J("formGroup",o.CreateForm),e.xp6(5),e.Q6J("controlErrorsTpl",s),e.xp6(4),e.Q6J("controlErrorsTpl",l)}},dependencies:[b.O5,N.kH,N.m6,n._Y,n.Fj,n.wV,n.JJ,n.JL,n.Q7,n.sg,n.u]});var J=i(7185),A=i(9549);function Q(r,t){1&r&&(e.TgZ(0,"th",19),e._uU(1," ID "),e.qZA())}function O(r,t){if(1&r&&(e.TgZ(0,"td",20),e._uU(1),e.qZA()),2&r){const o=t.$implicit;e.Tol(t.index%2==0?"gray":"tran"),e.xp6(1),e.hij(" ",o.c_id," ")}}function M(r,t){1&r&&(e.TgZ(0,"th",19),e._uU(1," Name "),e.qZA())}function k(r,t){if(1&r&&(e.TgZ(0,"td",20),e._uU(1),e.qZA()),2&r){const o=t.$implicit;e.Tol(t.index%2==0?"gray":"tran"),e.xp6(1),e.hij(" ",o.name," ")}}function B(r,t){1&r&&(e.TgZ(0,"th",19),e._uU(1," Credits "),e.qZA())}function I(r,t){if(1&r&&(e.TgZ(0,"td",20),e._uU(1),e.qZA()),2&r){const o=t.$implicit;e.Tol(t.index%2==0?"gray":"tran"),e.xp6(1),e.hij(" ",o.credits," ")}}function R(r,t){1&r&&(e.TgZ(0,"th",19),e._uU(1," Action "),e.qZA())}function j(r,t){if(1&r){const o=e.EpF();e.TgZ(0,"td",20)(1,"button",21),e.NdJ("click",function(){const g=e.CHM(o).$implicit,C=e.oxw();return e.KtG(C.ShowEditcaDialog(g))}),e.TgZ(2,"mat-icon"),e._uU(3,"edit"),e.qZA()()()}2&r&&e.Tol(t.index%2==0?"gray":"tran")}function z(r,t){1&r&&(e.TgZ(0,"th",19),e._uU(1," Delete "),e.qZA())}function q(r,t){if(1&r){const o=e.EpF();e.TgZ(0,"td",20)(1,"mat-icon",22),e.NdJ("click",function(){const g=e.CHM(o).$implicit,C=e.oxw();return e.KtG(C.deleteCourse(g))}),e._uU(2,"delete"),e.qZA()()}2&r&&e.Tol(t.index%2==0?"gray":"tran")}function G(r,t){1&r&&e._UZ(0,"tr",23)}function H(r,t){1&r&&e._UZ(0,"tr",24)}function $(r,t){if(1&r&&(e.TgZ(0,"tr",25)(1,"td",26),e._uU(2),e.qZA()()),2&r){e.oxw();const o=e.MAs(4);e.xp6(2),e.hij('No matches for "',o.value,'"')}}const V=function(){return[10,20,30]};class m{constructor(t,o,s){this.coursesSerice=t,this.dialog=o,this.toastr=s,this.courses=[],this.isVisibleFilter="invisible",this.displayedColumns=["c_id","name","credits","actions","delete"]}ngOnInit(){this.createTable()}getCourses(){var t=this;return(0,v.Z)(function*(){return yield t.coursesSerice.getCourses()})()}createTable(){this.getCourses().then(t=>{this.courses=t,this.dataSource=new a.by(this.courses),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort,this.isVisibleFilter="visible"})}applyFilter(t){this.dataSource.filter=t.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}deleteCourse(t){(0,L.C)(t.c_id,this.dialog,`Are you sure to delete the course: ${t.name}?`,"Atention","delete").afterClosed().subscribe(s=>{s.success&&this.delteCourse(t.c_id)})}delteCourse(t){this.coursesSerice.deleteCourse(t).then(o=>{o.success?(this.toastr.success("Success",o.mgs),this.createTable()):this.toastr.error("Error",o.error)})}ShowEditcaDialog(t){var o=this;return(0,v.Z)(function*(){o.dialog.open(u,{width:"500px",disableClose:!0,data:t}).afterClosed().subscribe(l=>{if(l.success){if("Canceled"==l.message)return;o.toastr.success("Success",l.message),o.createTable()}else o.toastr.error("Error",l.error)})})()}}m.\u0275fac=function(t){return new(t||m)(e.Y36(w.N),e.Y36(h.uw),e.Y36(J._W))},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-list"]],viewQuery:function(t,o){if(1&t&&(e.Gf(f.NW,5),e.Gf(p.YE,5)),2&t){let s;e.iGM(s=e.CRH())&&(o.paginator=s.first),e.iGM(s=e.CRH())&&(o.sort=s.first)}},decls:31,vars:11,consts:[[1,"m-6"],["matInput","","placeholder","Search",3,"keyup"],["input",""],[1,"mat-elevation-z8","m-6"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","c_id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",3,"class",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","credits"],["matColumnDef","actions"],["matColumnDef","delete"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],[1,"justify-between"],["showFirstLastButtons","","aria-label","Select page of periodic elements",1,"bg-[#F5F5F5]",3,"pageSizeOptions"],["type","button",1,"fixed","z-90","bottom-10","right-8","bg-blue-600","w-20","h-20","rounded-full","drop-shadow-lg","flex","justify-center","items-center","text-white","text-4xl","hover:bg-blue-700","animate-bounce","duration-300",3,"click"],[1,"scale-150"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[1,"pt-1.5","w-9","h-9","rounded-full",3,"click"],["id","delete",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","5",1,"mat-cell"]],template:function(t,o){1&t&&(e.TgZ(0,"mat-form-field",0)(1,"mat-label"),e._uU(2,"Search"),e.qZA(),e.TgZ(3,"input",1,2),e.NdJ("keyup",function(l){return o.applyFilter(l)}),e.qZA()(),e.TgZ(5,"div",3)(6,"table",4),e.ynx(7,5),e.YNc(8,Q,2,0,"th",6),e.YNc(9,O,2,4,"td",7),e.BQk(),e.ynx(10,8),e.YNc(11,M,2,0,"th",6),e.YNc(12,k,2,4,"td",7),e.BQk(),e.ynx(13,9),e.YNc(14,B,2,0,"th",6),e.YNc(15,I,2,4,"td",7),e.BQk(),e.ynx(16,10),e.YNc(17,R,2,0,"th",6),e.YNc(18,j,4,3,"td",7),e.BQk(),e.ynx(19,11),e.YNc(20,z,2,0,"th",6),e.YNc(21,q,3,3,"td",7),e.BQk(),e.YNc(22,G,1,0,"tr",12),e.YNc(23,H,1,0,"tr",13),e.YNc(24,$,3,1,"tr",14),e.qZA(),e.TgZ(25,"mat-toolbar",15),e._UZ(26,"div")(27,"mat-paginator",16),e.qZA()(),e.TgZ(28,"button",17),e.NdJ("click",function(){return o.ShowEditcaDialog()}),e.TgZ(29,"mat-icon",18),e._uU(30,"add"),e.qZA()()),2&t&&(e.xp6(1),e.Tol(o.isVisibleFilter),e.xp6(2),e.Tol(o.isVisibleFilter),e.xp6(3),e.Q6J("dataSource",o.dataSource),e.xp6(16),e.Q6J("matHeaderRowDef",o.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",o.displayedColumns),e.xp6(4),e.Q6J("pageSizeOptions",e.DdM(10,V)))},dependencies:[f.NW,a.BZ,a.fO,a.as,a.w1,a.Dz,a.nj,a.ge,a.ev,a.XQ,a.Gk,a.Ee,p.YE,p.nU,x.Nt,A.KE,A.hX,_.Hw,Z.Ye],styles:["#delete[_ngcontent-%COMP%]:hover{cursor:pointer;color:red}  snack-bar-container.alert-red{padding:20px;background-color:red;color:#fff}"]});const X=[{path:"",children:[{path:"**",redirectTo:"list"},{path:"list",component:m}]}];class c{}c.\u0275fac=function(t){return new(t||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[y.Bz.forChild(X),y.Bz]});class d{}d.\u0275fac=function(t){return new(t||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[b.ez,c,U.m,f.TU,a.p0,p.JX,x.c,_.Ps,F.rP,Z.g0,n.u5,n.UX,S.LD]})}}]);