"use strict";(self.webpackChunkItslTutorias=self.webpackChunkItslTutorias||[]).push([[232],{4232:(M,m,o)=>{o.r(m),o.d(m,{AlumnosModule:()=>O});var d=o(6814),l=o(2865),t=o(9468),h=o(76),p=o(2296),v=o(5940),g=o(2651);function c(e,a){1&e&&(t.TgZ(0,"div",26),t._UZ(1,"mat-progress-spinner",27),t.qZA()),2&e&&(t.xp6(1),t.Q6J("mode","indeterminate")("value",0))}const u=[{path:"",component:(()=>{class e{constructor(n){this.loginService=n,this.loadinges="false",this.mostrarSidenav=!1,this.colorSpinner="rgb(128, 0, 0)",this.titutloEstructura="",this.titulo="Programa de tutorias",this.loading=!1,this.loginService.resetTimer(),window.onload=()=>this.loginService.resetTimer(),window.onmousemove=()=>this.loginService.resetTimer(),window.onmousedown=()=>this.loginService.resetTimer(),window.ontouchstart=()=>this.loginService.resetTimer(),window.onclick=()=>this.loginService.resetTimer(),window.onkeypress=()=>this.loginService.resetTimer()}activarLoading(n){n.loadSpinner&&n.loadSpinner.subscribe(r=>{this.loadinges=r})}recibirTitulo(n){n.titulo&&n.titulo.subscribe(r=>{this.titulo=r})}salir(){}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(h.N))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-alumnos"]],inputs:{titulo:"titulo",loading:"loading"},decls:31,vars:5,consts:[["class","loading-class",4,"ngIf"],["autosize","",1,"contenedor-sidenav"],["mode","push",1,"sidenav-2"],["drawer",""],[1,"header-content-2"],[1,"item-header","item-header-titulo","item-route-titulo"],[1,"titulo-route"],[1,"item-header","item-header-btn","item-route-btn"],["type","button","mat-button","",3,"click"],[1,"bi","bi-arrow-right",2,"color","white","font-size","28px","font-weight","bold"],[1,"main-content-2"],[1,"contenedor-ruta",3,"click"],[1,"p-titulo-btn"],[1,"icon-container"],[1,"fa-solid","fa-arrow-left-from-line","fa-xl","icono-btn"],[1,"footer-sidenav-2"],[1,"header-content",2,"box-shadow","5px 5px 5px 1px rgba(0, 0, 0, 0.2)"],[1,"item-header","item-header-btn"],[1,"bi","bi-list",2,"color","white","font-size","28px","font-weight","bold"],[1,"item-header","item-header-titulo"],[1,"titulo-header-principal"],[1,"sidenav-content"],[1,"main-content"],[1,"router","animate__animated","animate__fadeInDown"],[2,"z-index","1",3,"activate"],[1,"footer-content"],[1,"loading-class"],[1,"loading-class-item",3,"mode","value"]],template:function(n,r){if(1&n){const w=t.EpF();t.YNc(0,c,2,2,"div",0),t.TgZ(1,"mat-drawer-container",1)(2,"mat-drawer",2,3)(4,"div",4)(5,"div",5)(6,"p",6),t._uU(7),t.ALo(8,"uppercase"),t.qZA()(),t.TgZ(9,"div",7)(10,"button",8),t.NdJ("click",function(){t.CHM(w);const s=t.MAs(3);return t.KtG(s.toggle())}),t._UZ(11,"i",9),t.qZA()()(),t.TgZ(12,"div",10)(13,"div",11),t.NdJ("click",function(){return r.salir()}),t.TgZ(14,"p",12),t._uU(15,"SALIR"),t.qZA(),t.TgZ(16,"p",13),t._UZ(17,"i",14),t.qZA()()(),t._UZ(18,"div",15),t.qZA(),t.TgZ(19,"div",16)(20,"div",17)(21,"button",8),t.NdJ("click",function(){t.CHM(w);const s=t.MAs(3);return t.KtG(s.toggle())}),t._UZ(22,"i",18),t.qZA()(),t.TgZ(23,"div",19)(24,"h2",20),t._uU(25),t.qZA()()(),t.TgZ(26,"div",21)(27,"div",22)(28,"div",23)(29,"router-outlet",24),t.NdJ("activate",function(s){return r.recibirTitulo(s)})("activate",function(s){return r.activarLoading(s)}),t.qZA()()()()(),t._UZ(30,"div",25)}2&n&&(t.Q6J("ngIf","true"===r.loadinges),t.xp6(7),t.Oqu(t.lcZ(8,3,r.titutloEstructura)),t.xp6(18),t.Oqu(r.titulo))},dependencies:[d.O5,l.lC,p.lW,v.Ou,g.jA,g.kh,d.gd],styles:[".loading-class[_ngcontent-%COMP%]{position:fixed;inset:0;background-color:#00000080;color:maroon!important;z-index:9999}.loading-class-item[_ngcontent-%COMP%]{width:20%;height:20%;position:fixed;inset:40% 0 0 50%;z-index:9999;color:maroon!important}.contenedor-sidenav[_ngcontent-%COMP%]{width:100%;height:100%;background-color:#fff}.sidenav[_ngcontent-%COMP%]{width:300px;background-color:#fff;overflow-x:hidden!important;overflow:hidden!important}.sidenav-2[_ngcontent-%COMP%]{width:300px;background-color:#eef3f8;overflow-x:hidden!important;overflow:hidden!important}.sidenav-content[_ngcontent-%COMP%]{display:flex;justify-content:end;align-items:center;width:100%;background-color:#fff;flex-direction:column;overflow-x:hidden}.header-content[_ngcontent-%COMP%], .header-content-2[_ngcontent-%COMP%]{display:flex;width:100%;height:10%;justify-content:center;align-items:center;flex-direction:row;margin:0;padding:0;overflow-x:hidden;background-color:#b03c3cf1;color:#fff}.footer-content[_ngcontent-%COMP%]{display:flex;width:100%;flex-direction:column;justify-content:end;align-items:center}.item-header[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center}.item-header-btn[_ngcontent-%COMP%]{width:5%;justify-content:center}.item-header-titulo[_ngcontent-%COMP%]{width:95%;justify-content:center;text-align:center;margin-right:5px}.item-route-titulo[_ngcontent-%COMP%]{width:60%}.item-route-btn[_ngcontent-%COMP%]{width:40%;justify-content:center}.titulo-route[_ngcontent-%COMP%]{text-align:center;margin:0}.main-content[_ngcontent-%COMP%]{display:flex;width:100%;height:100%;justify-content:start;align-items:center;flex-direction:column;background-color:#fff;margin-bottom:30px}.main-content-2[_ngcontent-%COMP%]{display:flex;width:100%;height:80%;justify-content:start;align-items:center;flex-direction:column;background-color:#eef3f8}.contenedor-ruta[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;width:100%;height:70px;cursor:pointer;margin:0}.contenedor-ruta-2[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:50%;cursor:pointer;margin:0}.contenedor-ruta[_ngcontent-%COMP%]:hover, .contenedor-ruta[_ngcontent-%COMP%]   .p-titulo-btn[_ngcontent-%COMP%]:hover{background-color:#e8eaf3}.footer-sidenav-2[_ngcontent-%COMP%]{width:100%;height:10%;background-color:#b03c3cf1;display:flex;justify-content:center;align-items:center}.img-footer-sidenav-2[_ngcontent-%COMP%]{width:80px;height:80px}.icono-btn[_ngcontent-%COMP%]{width:40%;height:100%;color:#000}.p-titulo-btn[_ngcontent-%COMP%]{color:#000;font-size:18px;font-weight:700;width:60%;height:100%;margin:0;flex-direction:column;display:flex;justify-content:center;text-align:center}.icon-container[_ngcontent-%COMP%]{margin:0}.footer-content[_ngcontent-%COMP%]{background-color:#fff}.titulo-header-principal[_ngcontent-%COMP%]{margin-right:10px}.router[_ngcontent-%COMP%]{width:100%}"]}),e})(),children:[{path:"inicio",component:(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-inicio"]],decls:2,vars:0,template:function(n,r){1&n&&(t.TgZ(0,"p"),t._uU(1,"inicio works!"),t.qZA())}}),e})()},{path:"**",redirectTo:"inicio"}]}];let _=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.Bz.forChild(u),l.Bz]}),e})();var x=o(5031);let O=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.ez,_,x.q]}),e})()},76:(M,m,o)=>{o.d(m,{N:()=>g});var d=o(3519),l=o.n(d),t=o(9468),h=o(9862),p=o(2865),v=o(9045);let g=(()=>{class c{constructor(i,u,_){this.http=i,this.router=u,this.api=_,this.idleTimeout=12e5,this.listaRutas={1:"/alumnos",2:"/tutores",3:"/coordinador-tutorias",4:"/coordinador-institucional",5:"/desarrollo-academico"}}resetTimer(){clearTimeout(this.idleTimer),this.idleTimer=setTimeout(()=>this.cerrarSesion(),this.idleTimeout)}validarRutas(i){return this.listaRutas.hasOwnProperty(i)?[!0,this.listaRutas[i]]:"/auth/login"}cerrarSesion(){localStorage.getItem("id_usuario")&&localStorage.getItem("id_rol")&&localStorage.getItem("numero_checador")&&(l().fire({icon:"info",iconColor:"rgb(128, 0, 0)",confirmButtonColor:"rgb(128, 0, 0)",text:"La sesion expiro por inactividad.",footer:" ",showConfirmButton:!0,heightAuto:!1}),setTimeout(()=>{localStorage.clear(),this.router.navigate(["auth/login"])},2e3))}logout(){l().fire({icon:"success",iconColor:"rgb(128, 0, 0)",confirmButtonColor:"rgb(128, 0, 0)",text:"Sesion cerrada correctamente.",footer:" ",showConfirmButton:!0,heightAuto:!1}),setTimeout(()=>{localStorage.clear(),this.router.navigate(["auth/login"])},2e3)}avisos(){this.api.verAviso().subscribe(i=>{if(1===i.codigo){let u=null===i.data[0].url_1||""===i.data[0].url_1?"":`<a href="${i.data[0].url_1}" target="_blank">Visitar link.</a>`;l().fire({title:i.data[0].titulo,text:i.data[0].contenido,icon:"info",footer:u,iconColor:"rgb(128, 0, 0)",confirmButtonText:"Aceptar",heightAuto:!1,confirmButtonColor:"rgb(128, 0, 0)"})}})}}return c.\u0275fac=function(i){return new(i||c)(t.LFG(h.eN),t.LFG(p.F0),t.LFG(v.s))},c.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);