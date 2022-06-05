var ce=Object.defineProperty,ue=Object.defineProperties;var de=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var V=(a,n,t)=>n in a?ce(a,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[n]=t,N=(a,n)=>{for(var t in n||(n={}))W.call(n,t)&&V(a,t,n[t]);if(R)for(var t of R(n))j.call(n,t)&&V(a,t,n[t]);return a},P=(a,n)=>ue(a,de(n));var B=(a,n)=>{var t={};for(var r in a)W.call(a,r)&&n.indexOf(r)<0&&(t[r]=a[r]);if(a!=null&&R)for(var r of R(a))n.indexOf(r)<0&&j.call(a,r)&&(t[r]=a[r]);return t};import{c as me,s as he,A as pe,I as ge,r as u,j as e,g as v,u as S,a as J,b as i,M as O,F as L,d as M,B as f,D as ve,L as be,t as d,e as k,f as E,h as $,S as we,C as z,G as F,i as I,k as x,l as y,m as C,n as U,T as fe,o as Ce,p as Ae,q as Ne,R as H,v as X,w as Fe,x as Se,y as xe,z as ke,E as Le}from"./vendor.13f09842.js";const Pe=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}};Pe();const Y="token",ee=a=>localStorage.setItem(Y,a),$e=()=>localStorage.getItem(Y),Ee=me({uri:"https://instagramarianjsserver-production.up.railway.app/graphql"}),Ie=he((a,{headers:n})=>{const t=$e();return{headers:P(N({},n),{authorization:t||""})}}),ye=new pe({connectToDevTools:!0,cache:new ge,link:Ie.concat(Ee)}),_=u.exports.createContext({}),_e=(a,n)=>{switch(n.type){case"authLogin":return P(N(N({},a),n.payload),{checking:!1});case"authCheckingFinish":return P(N({},a),{checking:!1});case"authLogout":return{checking:!1};default:return a}},qe={checking:!0},Te=({children:a})=>{const[n,t]=u.exports.useReducer(_e,qe),r=({id:l,name:c,username:h,email:m})=>{t({type:"authLogin",payload:{id:l,name:c,username:h,email:m}})},o=()=>{t({type:"authCheckingFinish"})},s=()=>{localStorage.removeItem("token"),t({type:"authLogout"})};return e(_.Provider,{value:{authState:n,authCheckingFinish:o,authLogin:r,authLogout:s},children:a})};var ae="/assets/instaclone.610d1ac6.png";var q="/assets/avatar.d9ec55fd.png";const De=v`
    mutation registerMutation($input: UserInput!) {
        register(input: $input) {
            user {
                id
                name
                username
                email
                description
                web
                avatar
                createdAt
                updatedAt
            }
            token
        }
    }
`,Re=v`
    mutation loginMutation($input: LoginInput!) {
        login(input: $input) {
            user {
                id
                name
                username
                email
                description
                web
                avatar
                createdAt
                updatedAt
            }
            token
        }
    }
`,Oe=v`
    mutation renewTokenMutation {
        renewToken {
            user {
                id
                name
                username
                email
                description
                web
                avatar
                createdAt
                updatedAt
            }
            token
        }
    }
`,T=v`
    query GetUser($id: ID, $email: String, $username: String) {
        getUser(id: $id, email: $email, username: $username) {
            id
            name
            username
            email
            description
            web
            avatar
            createdAt
            updatedAt
        }
    }
`,Me=v`
    mutation updateAvatarMutation($file: Upload!) {
        updateAvatar(file: $file) {
            status
            urlAvatar
        }
    }
`,Ue=v`
    mutation deleteAvatarMutation {
        deleteAvatar
    }
`,G=v`
    mutation updateUserMutation($input: updateUserInput!) {
        updateUser(input: $input)
    }
`,ze=v`
    query Search($query: String) {
        search(query: $query) {
            id
            name
            username
            email
            avatar
            web
            description
            createdAt
            updatedAt
        }
    }
`;const Ge=v`
    mutation publishMutation($file: Upload!) {
        publish(file: $file) {
            status
            urlFile
        }
    }
`,Be=v`
    query GetPublications($username: String!) {
        getPublications(username: $username) {
            id
            author {
                id
                name
                username
                email
                avatar
                web
                description
                createdAt
                updatedAt
            }
            file
            fileType
            createdAt
            updatedAt
        }
    }
`,He=v`
    query GetPublicationsFollowing {
        getPublicationsFollowing {
            id
            author {
                id
                name
                username
                email
                avatar
                web
                description
                updatedAt
                createdAt
            }
            file
            fileType
            createdAt
            updatedAt
        }
    }
`,Ve=({show:a,setShow:n})=>{const[t,r]=u.exports.useState(null),[o,s]=u.exports.useState(!1),[l]=S(Ge),c=u.exports.useCallback(p=>{const g=p[0];r({type:"image",file:g,preview:URL.createObjectURL(g)})},[]),{getRootProps:h,getInputProps:m}=J({accept:"image/jpeg, image/png",noKeyboard:!0,multiple:!1,onDrop:c}),w=()=>{s(!1),r(null),n(!1)},b=()=>{s(!0),l({variables:{file:t==null?void 0:t.file}}).then(({data:p})=>{p.publish.status?(d.success("Publicado correctamente"),w()):(d.warning("Error en la publicaci\xF3n"),w())}).catch(p=>{console.log(p),d.error("Error al publicar"),w()})};return i(O,{size:"small",open:a,onClose:w,className:"modal-upload",children:[i("div",P(N({},h()),{className:"dropzone",style:(t==null?void 0:t.file)&&{border:0},children:[!t&&i(L,{children:[e(M,{name:"cloud upload"}),e("p",{children:"Arrastra tu foto que quieras publicar"})]}),e("input",N({},m()))]})),(t==null?void 0:t.type)==="image"&&e("div",{className:"image",style:{backgroundImage:`url(${t.preview})`}}),t&&e(f,{className:"btn-upload btn-action",onClick:b,children:"Publicar"}),o&&i(ve,{active:!0,className:"publishing",children:[e(be,{}),e("p",{children:"Publicando..."})]})]})},We=()=>{const{authState:a}=u.exports.useContext(_),[n,t]=u.exports.useState(!1),{data:r,loading:o,error:s}=k(T,{variables:{username:a.username}});if(o||s)return null;const{getUser:l}=r;return i(L,{children:[i("div",{className:"right-header",children:[e(E,{to:"/",children:e(M,{name:"home"})}),e(M,{name:"plus",onClick:()=>t(!0)}),e(E,{to:`/${a.username}`,children:e($,{src:l.avatar?l.avatar:q,avatar:!0})})]}),e(Ve,{show:n,setShow:t})]})};const je=()=>{const[a,n]=u.exports.useState(null),[t,r]=u.exports.useState([]),{data:o,loading:s}=k(ze,{variables:{query:a}}),l=c=>{c.target.value?n(c.target.value):n(null)};return u.exports.useEffect(()=>{if(o!=null&&o.search.length){const c=[];o.search.forEach((h,m)=>{c.push({key:m,title:h.name,username:h.username,avatar:h.avatar})}),r(c)}else r([])},[o]),e(we,{className:"search-users",input:{icon:"search",iconPosition:"left"},fluid:!0,loading:s,value:a||"",onSearchChange:l,results:t,resultRenderer:c=>e(Ke,{data:c})})},Ke=({data:a})=>i(E,{className:"search-users__item",to:`/${a.username}`,children:[e($,{src:a.avatar||q}),i("div",{children:[e("p",{children:a.title}),e("p",{children:a.username})]})]}),Qe=()=>e("div",{className:"header",children:e(z,{children:i(F,{children:[e(F.Column,{width:3,className:"header__logo",children:e(E,{to:"/",children:e($,{src:ae,alt:"Instaclone"})})}),e(F.Column,{width:10,children:e(je,{})}),e(F.Column,{width:3,children:e(We,{})})]})})});const Ze={email:"",password:""},Je=I({email:x().email("El email no es valido").required("El email es obligatorio"),password:x().required("La contrase\xF1a es obligatorio")}),Xe=()=>{const[a,n]=u.exports.useState(""),{authLogin:t}=u.exports.useContext(_),[r]=S(Re),s=y({initialValues:Ze,validationSchema:Je,onSubmit:l=>{n(""),r({variables:{input:{email:l.email,password:l.password}}}).then(({data:c})=>{ee(c.login.token),t({id:c.login.user.id,name:c.login.user.name,username:c.login.user.username,email:c.login.user.email})}).catch(c=>n(c.message))}});return i(C,{className:"login-form",onSubmit:s.handleSubmit,children:[e("h2",{children:"Entra para ver fotos y v\xEDdeos de tus amigos"}),e(C.Input,{type:"text",placeholder:"Correo electronico",name:"email",value:s.values.email,onChange:s.handleChange,error:s.touched.email&&s.errors.email}),e(C.Input,{type:"password",placeholder:"Contrase\xF1a",name:"password",value:s.values.password,onChange:s.handleChange,error:s.touched.password&&s.errors.password}),e(f,{type:"submit",className:"btn-submit",children:"Iniciar sesi\xF3n"}),a&&e("p",{className:"submit-error",children:a})]})};const Ye=()=>i("div",{className:"user-not-found",children:[e("p",{children:"Usuario no encontrado"}),e("p",{children:"Es posible que el enlace que has seguido sea incorrecto o que el usuario se haya eliminado"}),e(E,{to:"/",children:"Volver a la home"})]});const re=a=>{const{showModal:n,setShowModal:t,title:r,children:o}=a;return i(O,{size:"mini",open:n,onClose:()=>{t(!1)},className:"modal-basic",children:[r&&e(O.Header,{children:r}),o]})};const ea=({setShowModal:a})=>{const[n,t]=u.exports.useState(!1),[r,o]=u.exports.useState(!1),{authState:s}=u.exports.useContext(_),[l]=S(Me,{update(p,{data:{updateAvatar:g}}){const{getUser:A}=p.readQuery({query:T,variables:{username:s.username}});p.writeQuery({query:T,variables:{username:s.username},data:{getUser:P(N({},A),{avatar:g.urlAvatar})}})}}),[c]=S(Ue,{update(p){const{getUser:g}=p.readQuery({query:T,variables:{username:s.username}});p.writeQuery({query:T,variables:{username:s.username},data:{getUser:P(N({},g),{avatar:""})}})}}),h=u.exports.useCallback(p=>{const g=p[0];t(!0),l({variables:{file:g}}).then(({data:A})=>{A.updateAvatar.status?(t(!1),a(!1),d.success("Avatar actualizado")):(t(!1),d.warning("Error al actualizar el avatar"))}).catch(A=>{console.log(A.message),t(!1),d.warning("Server error")})},[]),{getRootProps:m,getInputProps:w}=J({accept:"image/jpeg, image/png",noKeyboard:!0,multiple:!1,onDrop:h}),b=()=>{o(!0),c().then(({data:p})=>{p.deleteAvatar?(o(!1),a(!1),d.success("Avatar eliminado")):(o(!1),d.warning("Error al borrar al avatar"))}).catch(p=>{console.log(p.message),o(!1),d.warning("Server error")})};return i("div",{className:"avatar-form",children:[e(f,P(N({},m()),{loading:n,children:"Cargar una foto"})),e(f,{onClick:b,loading:r,children:"Eliminar foto actual"}),e(f,{onClick:()=>a(!1),children:"Cancelar"}),e("input",N({},w()))]})};const aa=v`
    query Query($username: String!) {
        isFollow(username: $username)
    }
`,ra=v`
    mutation followMutation($username: String!) {
        follow(username: $username)
    }
`,ta=v`
    mutation unFollowMutation($username: String!) {
        unFollow(username: $username)
    }
`,oa=v`
    query GetFollowers($username: String!) {
        getFollowers(username: $username) {
            id
            name
            username
            email
            avatar
            web
            description
            createdAt
            updatedAt
        }
    }
`,na=v`
    query GetFollowing($username: String!) {
        getFollowing(username: $username) {
            id
            name
            username
            email
            avatar
            web
            description
            createdAt
            updatedAt
        }
    }
`,sa=v`
    query GetNotFollowing {
        getNotFollowing {
            id
            name
            username
            email
            avatar
            web
            description
            createdAt
            updatedAt
        }
    }
`,ia=({getUser:a,auth:n,handlerModal:t})=>{const{data:r,loading:o,refetch:s}=k(aa,{variables:{username:a.username}}),[l]=S(ra),[c]=S(ta),h=()=>r.isFollow?e(f,{className:"btn-danger",onClick:w,children:"Dejar de seguir"}):e(f,{className:"btn-action",onClick:m,children:"Seguir"}),m=()=>{l({variables:{username:a.username}}).then(({data:b})=>{b.follow?(d.success(`Ahora sigues a ${a.username}`),s()):d.error(`Error al seguir a ${a.username}`)}).catch(b=>{console.log(b.message),d.error(`Error al seguir a ${a.username}`)})},w=()=>{c({variables:{username:a.username}}).then(({data:b})=>{b.unFollow?(d.success(`Dejaste de seguir a ${a.username}`),s()):d.error(`Error al dejar de seguir a ${a.username}`)}).catch(b=>{console.log(b.message),d.error(`Error al dejar de seguir a ${a.username}`)})};return i("div",{className:"header-profile",children:[e("h2",{children:a.username}),a.username===n.username?e(f,{onClick:()=>t("settings"),children:"Ajustes"}):!o&&h()]})};const la={currentPassword:"",newPassword:"",repeatNewPassword:""},ca=I({currentPassword:x().required("La contrase\xF1a es obligatorip"),newPassword:x().required("La nueva contrase\xF1a es obligatorio").oneOf([U("repeatNewPassword")],"Las contrase\xF1as no son iguales"),repeatNewPassword:x().required("La nueva contrase\xF1a es obligatorio").oneOf([U("newPassword")],"Las contrase\xF1as no son iguales")}),ua=({logout:a})=>{const[n]=S(G),r=y({initialValues:la,validationSchema:ca,onSubmit:o=>{n({variables:{input:{currentPassword:o.currentPassword,newPassword:o.newPassword}}}).then(({data:s})=>{s.updateUser?(a(),d.success("Contrase\xF1a actualizada correctamente")):d.error("Error al cambiar la contrase\xF1a")}).catch(s=>{console.log(s),d.error("Error al cambiar la contrase\xF1a")})}});return i(C,{className:"password-form",onSubmit:r.handleSubmit,children:[e(C.Input,{type:"password",placeholder:"Contrase\xF1a actual",name:"currentPassword",value:r.values.currentPassword,onChange:r.handleChange,error:r.touched.currentPassword&&r.errors.currentPassword}),e(C.Input,{type:"password",placeholder:"Nueva contrase\xF1a",name:"newPassword",value:r.values.newPassword,onChange:r.handleChange,error:r.touched.newPassword&&r.errors.newPassword}),e(C.Input,{type:"password",placeholder:"Repetir nueva contrase\xF1a",name:"repeatNewPassword",value:r.values.repeatNewPassword,onChange:r.handleChange,error:r.touched.repeatNewPassword&&r.errors.repeatNewPassword}),e(f,{type:"submit",className:"btn-submit",children:"Actualizar"})]})};const da=({setShowModal:a,currentEmail:n,refetch:t})=>{const[r]=S(G),o=y({initialValues:{email:n||""},validationSchema:I({email:x().email("El email no es valido").required("El email es obligatorio")}),onSubmit:s=>{r({variables:{input:s}}).then(({data:l})=>{l.updateUser?(d.success("Email actualizado correctamente"),t(),a(!1)):d.error("Error al actualizar el email")}).catch(l=>{console.log(l.message),d.error("Error al actualizar el email")})}});return i(C,{className:"email-form",onSubmit:o.handleSubmit,children:[e(C.Input,{placeholder:"Escribe tu nuevo email",name:"email",value:o.values.email,onChange:o.handleChange,error:o.touched.email&&o.errors.email}),e(f,{type:"submit",className:"btn-submit",children:"Actualizar"})]})};const ma=({setShowModal:a,currentDescription:n,refetch:t})=>{const[r]=S(G),o=y({initialValues:{description:n||""},validationSchema:I({description:x().required("La descripci\xF3n es obligatorio")}),onSubmit:s=>{r({variables:{input:s}}).then(({data:l})=>{l.updateUser?(d.success("Biograf\xEDa actualizada correctamente"),t(),a(!1)):d.error("Error al actualizar tu biograf\xEDa")}).catch(l=>{console.log(l.message),d.error("Error al actualizar tu biograf\xEDa")})}});return i(C,{className:"description-form",onSubmit:o.handleSubmit,children:[e(fe,{name:"description",value:o.values.description,onChange:o.handleChange,className:o.errors.description&&"error"}),e(f,{type:"submit",className:"btn-submit",children:"Actualziar"})]})};const ha=({setShowModal:a,currentWeb:n,refetch:t})=>{const[r]=S(G),o=y({initialValues:{web:n||""},validationSchema:I({web:x().matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,"El sitio web es incorrecto").required("El sitio web es obligatorio")}),onSubmit:s=>{r({variables:{input:s}}).then(({data:l})=>{l.updateUser?(d.success("Sitio web actualizado correctamente"),t(),a(!1)):d.error("Error al actualizar tu sitio web")}).catch(l=>{console.log(l.message),d.error("Error al actualizar tu sitio web")})}});return i(C,{className:"web-form",onSubmit:o.handleSubmit,children:[e(C.Input,{placeholder:"URL web",name:"web",value:o.values.web,onChange:o.handleChange,error:o.touched.web&&o.errors.web}),e(f,{type:"submit",className:"btn-submit",children:"Actualizar"})]})},pa=({setShowModal:a,setTitleModal:n,setChildrenModal:t,getUser:r,refetch:o})=>{const{authLogout:s}=u.exports.useContext(_),l=Ce(),c=()=>{n("Cambiar tu contrase\xF1a"),t(e(ua,{logout:b}))},h=()=>{n("Cambiar email"),t(e(da,{setShowModal:a,currentEmail:r.email,refetch:o}))},m=()=>{n("Actualizar tu biograf\xEDa"),t(e(ma,{setShowModal:a,currentDescription:r.description,refetch:o}))},w=()=>{n("Actualizar sitio web"),t(e(ha,{setShowModal:a,currentWeb:r.web,refetch:o}))},b=async()=>{await l.clearStore(),s()};return i("div",{className:"settings-form",children:[e(f,{onClick:c,children:"Cambiar contrase\xF1a"}),e(f,{onClick:h,children:"Cambiar email"}),e(f,{onClick:m,children:"Descripti\xF3n"}),e(f,{onClick:w,children:"Sitio web"}),e(f,{onClick:b,children:"Cerrar sesi\xF3n"}),e(f,{onClick:()=>a(!1),children:"Cancelar"})]})};const K=({users:a,setShowModal:n})=>{const t=Ae(),r=o=>{n(!1),t.push(`/${o}`)};return e("div",{children:a.length?a.map((o,s)=>i("div",{className:"list-users__users",onClick:()=>r(o.username),children:[e($,{src:o.avatar||q,avatar:!0}),i("div",{children:[e("p",{children:o.name}),e("p",{children:o.username})]})]},s)):e("p",{className:"list-users__not-users",children:"No se han encontrado usuarios"})})},ga=({username:a,totalPublications:n})=>{const[t,r]=u.exports.useState(!1),[o,s]=u.exports.useState(""),[l,c]=u.exports.useState(null),{data:h,loading:m,startPolling:w,stopPolling:b}=k(oa,{variables:{username:a}}),{data:p,loading:g,startPolling:A,stopPolling:D}=k(na,{variables:{username:a}});u.exports.useEffect(()=>(w(1e3),()=>b()),[w,b]),u.exports.useEffect(()=>(A(1e3),()=>D()),[A,D]);const ie=()=>{s("Seguidores"),c(e(K,{users:h.getFollowers,setShowModal:r})),r(!0)},le=()=>{s("Usuarios seguidos"),c(e(K,{users:p.getFollowing,setShowModal:r})),r(!0)};return m||g?null:i(L,{children:[i("div",{className:"followers",children:[i("p",{children:[e("span",{children:n})," publicaciones"]}),i("p",{className:"link",onClick:ie,children:[e("span",{children:h.getFollowers.length})," seguidores"]}),i("p",{className:"link",onClick:le,children:[e("span",{children:p.getFollowing.length})," seguidos"]})]}),e(re,{showModal:t,setShowModal:r,title:o,children:l})]})},va=({username:a,totalPublications:n})=>{const[t,r]=u.exports.useState(!1),[o,s]=u.exports.useState(""),[l,c]=u.exports.useState(null),{authState:h}=u.exports.useContext(_),{data:m,loading:w,error:b,refetch:p}=k(T,{variables:{username:a}});if(w)return null;if(b)return e(Ye,{});const{getUser:g}=m,A=D=>{switch(D){case"avatar":s("Cambiar foto de perfil"),c(e(ea,{setShowModal:r})),r(!0);break;case"settings":s(""),c(e(pa,{setShowModal:r,setTitleModal:s,setChildrenModal:c,getUser:g,refetch:p})),r(!0);break}};return i(L,{children:[i(F,{className:"profile",children:[e(F.Column,{width:5,className:"profile__left",children:e($,{src:g.avatar?g.avatar:q,avatar:!0,onClick:()=>a===h.username&&A("avatar")})}),i(F.Column,{width:11,className:"profile__right",children:[e(ia,{getUser:g,auth:h,handlerModal:A}),e(ga,{username:a,totalPublications:n}),i("div",{className:"other",children:[e("p",{className:"name",children:g.name}),g.web&&e("a",{href:g.web,className:"siteWeb",target:"_blank",rel:"noreferrer",children:g.web}),g.description&&e("p",{className:"description",children:g.description})]})]})]}),e(re,{showModal:t,setShowModal:r,title:o,children:l})]})};const ba={name:"",username:"",email:"",password:"",repeatPassword:""},wa=I({name:x().required("El nombre es obligatorio"),username:x().matches(/^[a-zA-Z0-9-]*$/,"El nombre del usuario no puede tener espacio").required("El nombre de usuario es obligatorio"),email:x().email("El email no es valido").required("El email es obligatorio"),password:x().required("La contrase\xF1a es obligatorio").oneOf([U("repeatPassword")],"Las contrase\xF1as no son iguales"),repeatPassword:x().required("La contrase\xF1a es obligatorio").oneOf([U("password")],"Las contrase\xF1as no son iguales")}),fa=({setShowLogin:a})=>{const[n]=S(De),r=y({initialValues:ba,validationSchema:wa,onSubmit:o=>{n({variables:{input:{name:o.name,username:o.username,email:o.email,password:o.password}}}).then(({data:s})=>{d.success("Usuario registrado correctamente"),a(!0)}).catch(s=>{console.log(s.message),d.error(s.message)})}});return i(L,{children:[e("h2",{className:"register-form-title",children:"Reg\xEDstrate para ver fotos y v\xEDdeos de tus amigos."}),i(C,{className:"register-form",onSubmit:r.handleSubmit,children:[e(C.Input,{type:"text",placeholder:"Nombre y apellidos",name:"name",value:r.values.name,onChange:r.handleChange,error:r.touched.name&&r.errors.name}),e(C.Input,{type:"text",placeholder:"Nombre de usuario",name:"username",value:r.values.username,onChange:r.handleChange,error:r.touched.username&&r.errors.username}),e(C.Input,{type:"text",placeholder:"Correo electronico",name:"email",value:r.values.email,onChange:r.handleChange,error:r.touched.email&&r.errors.email}),e(C.Input,{type:"password",placeholder:"Contrase\xF1a",name:"password",value:r.values.password,onChange:r.handleChange,error:r.touched.password&&r.errors.password}),e(C.Input,{type:"password",placeholder:"Repetir contrase\xF1a",name:"repeatPassword",value:r.values.repeatPassword,onChange:r.handleChange,error:r.touched.repeatPassword&&r.errors.repeatPassword}),e(f,{type:"submit",className:"btn-submit",children:"Registrarse"})]})]})};const Ca=v`
    mutation AddComment($input: AddCommentInput!) {
        addComment(input: $input) {
            id
            publicationId
            author {
                id
                name
                username
                email
                avatar
                web
                description
                createdAt
                updatedAt
            }
            comment
            createdAt
            updatedAt
        }
    }
`,Aa=v`
    query GetComments($publicationId: ID!) {
        getComments(publicationId: $publicationId) {
            id
            publicationId
            comment
            author {
                id
                name
                username
                email
                avatar
                web
                description
                createdAt
                updatedAt
            }
            createdAt
            updatedAt
        }
    }
`,Q={comment:""},Na=I({comment:x().required("Comentario requerido")}),te=({publication:a})=>{const[n]=S(Ca),r=y({initialValues:Q,validationSchema:Na,onSubmit:o=>{n({variables:{input:{comment:o.comment,publicationId:a.id}}}).then(({data:s})=>{r.handleReset(Q)}).catch(s=>{console.log(s.message)})}});return i(C,{className:"comment-form",onSubmit:r.handleSubmit,children:[e(C.Input,{type:"text",placeholder:"A\xF1ade un comentario...",name:"comment",value:r.values.comment,onChange:r.handleChange,error:r.errors.comment&&!0}),e(f,{type:"submit",children:"Publicar"})]})};const Fa=({publication:a})=>{const{data:n,loading:t,startPolling:r,stopPolling:o}=k(Aa,{variables:{publicationId:a.id}});return u.exports.useEffect(()=>(r(1e3),()=>o()),[r,o]),t?null:e("div",{className:"comments",children:n.getComments.map((s,l)=>i(E,{to:`/${s.author.username}`,className:"comment",children:[e($,{src:s.author.avatar||q,avatar:!0}),i("div",{children:[e("p",{children:s.author.username}),e("p",{children:s.comment})]})]},l))})};const Sa=v`
    mutation AddLike($publicationId: ID!) {
        addLike(publicationId: $publicationId)
    }
`,xa=v`
    query IsLike($publicationId: ID!) {
        isLike(publicationId: $publicationId)
    }
`,ka=v`
    mutation DeleteLike($publicationId: ID!) {
        deleteLike(publicationId: $publicationId)
    }
`,La=v`
    query CountLike($publicationId: ID!) {
        countLikes(publicationId: $publicationId)
    }
`,oe=({publication:a})=>{const[n,t]=u.exports.useState(!1),[r]=S(Sa),[o]=S(ka),{data:s,loading:l,refetch:c}=k(xa,{variables:{publicationId:a.id}}),{data:h,loading:m,refetch:w}=k(La,{variables:{publicationId:a.id}}),b=()=>{t(!0),r({variables:{publicationId:a.id}}).then(({data:A})=>{console.log(A),c(),w(),t(!1)}).catch(A=>{console.log(A.message),t(!1)})},p=()=>{t(!0),o({variables:{publicationId:a.id}}).then(({data:A})=>{console.log(A),c(),w(),t(!1)}).catch(A=>{console.log(A.message),t(!1)})},g=()=>{n||(s.isLike?p():b())};return l||m?null:i("div",{className:"actions",children:[e(M,{className:s.isLike?"like active":"like",name:s.isLike?"heart":"heart outline",onClick:g}),h.countLikes," ",h.countLikes===1?"like":"likes"]})},ne=({showModal:a,setShowModal:n,publication:t})=>e(O,{open:a,onClose:()=>n(!1),className:"modal-publication",children:i(F,{children:[e(F.Column,{className:"modal-publication__left",width:10,style:{backgroundImage:`url("${t.file}")`}}),i(F.Column,{className:"modal-publication__right",width:6,children:[e(Fa,{publication:t}),e(oe,{publication:t}),e(te,{publication:t})]})]})}),Pa=({publication:a})=>{const[n,t]=u.exports.useState(!1);return i(L,{children:[e("div",{className:"preview-publication",onClick:()=>t(!0),children:e($,{className:"preview-publication__image",src:a.file})}),e(ne,{showModal:n,setShowModal:t,publication:a})]})},$a=({publications:a})=>e("div",{className:"publications",children:e(F,{columns:4,children:a.map((n,t)=>e(F.Column,{children:e(Pa,{publication:n})},t))})});const Ea=()=>{const[a,n]=u.exports.useState(!1),[t,r]=u.exports.useState(null),{data:o,loading:s,startPolling:l,stopPolling:c}=k(He);if(u.exports.useEffect(()=>(l(1e3),()=>c()),[l,c]),s)return null;const h=m=>{r(m),n(!0)};return i(L,{children:[e("div",{className:"feed",children:o.getPublicationsFollowing.map((m,w)=>i("div",{className:"feed__box",children:[e(E,{to:`/${m.author.username}`,children:i("div",{className:"feed__box-user",children:[e($,{src:m.author.avatar||q,avatar:!0}),e("span",{children:m.author.name})]})}),e("div",{className:"feed__box-photo",style:{backgroundImage:`url("${m.file}")`},onClick:()=>h(m)}),e("div",{className:"feed__box-actions",children:e(oe,{publication:m})}),e("div",{className:"feed__box-form",children:e(te,{publication:m})})]},w))}),a&&t&&e(ne,{showModal:a,setShowModal:n,publication:t})]})};const Ia=()=>{const{data:a,loading:n,startPolling:t,stopPolling:r}=k(sa);return u.exports.useEffect(()=>(t(1e3),()=>r()),[]),n?null:i("div",{className:"users-not-following",children:[e("h3",{children:"Usuarios que no sigues"}),a.getNotFollowing.map(o=>i(E,{to:`/${o.username}`,className:"users-not-following__user",children:[e($,{src:o.avatar||q,avatar:!0}),e("span",{children:o.name})]},o.id))]})},ya=()=>{const[a,n]=u.exports.useState(!0),t=()=>n(!a);return i(z,{fluid:!0,className:"auth",children:[e($,{src:ae}),e("div",{className:"container-form",children:a?e(Xe,{}):e(fa,{setShowLogin:n})}),e("div",{className:"change-form",children:e("p",{children:a?i(L,{children:["\xBFNo tienes cuenta?",e("span",{onClick:t,children:"Reg\xEDstrate"})]}):i(L,{children:["\xA1Entra con tu cuenta!",e("span",{onClick:t,children:"Iniciar sesi\xF3n"})]})})})]})};const _a=()=>e("div",{children:e("h1",{children:"404"})});const se=()=>e(Qe,{}),qa=()=>i(L,{children:[e(se,{}),e(z,{className:"layout-basic",children:i(F,{className:"home",children:[e(F.Column,{className:"home__left",width:11,children:e(Ea,{})}),e(F.Column,{className:"home__right",width:5,children:e(Ia,{})})]})})]}),Ta=()=>{const{username:a}=Ne(),{data:n,loading:t,startPolling:r,stopPolling:o}=k(Be,{variables:{username:a}});return u.exports.useEffect(()=>(r(1e3),()=>o()),[r,o]),t?null:i(L,{children:[e(se,{}),i(z,{children:[e(va,{username:a,totalPublications:n.getPublications.length}),e($a,{publications:n.getPublications})]})]})},Da=r=>{var o=r,{isAuthenticated:a,component:n}=o,t=B(o,["isAuthenticated","component"]);return e(H,P(N({},t),{component:s=>a?e(X,{to:"/"}):e(n,N({},s))}))},Z=r=>{var o=r,{isAuthenticated:a,component:n}=o,t=B(o,["isAuthenticated","component"]);return e(H,P(N({},t),{component:s=>a?e(n,N({},s)):e(X,{to:"/auth"})}))},Ra=()=>{const{authState:a,authLogin:n,authCheckingFinish:t}=u.exports.useContext(_),[r]=S(Oe);return u.exports.useEffect(()=>{r().then(({data:o})=>{ee(o.renewToken.token),n({id:o.renewToken.user.id,name:o.renewToken.user.name,username:o.renewToken.user.username,email:o.renewToken.user.email})}).catch(o=>t())},[]),a.checking?e("div",{className:"spinner"}):e(Fe,{children:e("div",{children:i(Se,{children:[e(Da,{exact:!0,path:"/auth",isAuthenticated:!!a.id,component:ya}),e(Z,{exact:!0,path:"/",isAuthenticated:!!a.id,component:qa}),e(Z,{exact:!0,path:"/:username",isAuthenticated:!!a.id,component:Ta}),e(H,{exact:!0,path:"*",component:_a})]})})})};function Oa(){return e(xe,{client:ye,children:i(Te,{children:[e(Ra,{}),e(ke,{position:"top-right",autoClose:5e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})})}Le.render(e(Oa,{}),document.getElementById("root"));
