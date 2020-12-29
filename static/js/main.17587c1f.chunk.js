(this["webpackJsonpbreeze-weather"]=this["webpackJsonpbreeze-weather"]||[]).push([[0],{110:function(t,e,n){},112:function(t,e,n){},135:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n(0),r=n.n(i),c=n(33),o=n.n(c),l=(n(110),n(111),n(112),n(24)),s=n(25),h=n(30),u=n(29),d=n(21),p=function(t,e){return"c"===e?Math.round(t-273.15):"f"===e?Math.round(1.8*(t-273.15)+32):t},j=n(76),f=n(22);function m(){var t=Object(d.a)(["\n      background: none;\n      outline: none;\n      border: none;\n      color: inherit;\n      font-family: inherit;\n      font-size: inherit;\n      padding:4px;\n    "]);return m=function(){return t},t}function b(){var t=Object(d.a)(["\n      max-width: max-content;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      margin: 40px auto 20px auto;\n      div {\n        width:100%;\n        display:flex;\n        justify-content:space-around;\n      }\n    "]);return b=function(){return t},t}var y=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).Weather=f.a.div(b()),a.TransparentButton=f.a.button(m()),a}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.city,n=t.country,i=t.displayName,r=t.temp,c=t.feelsLike,o=t.main,l=t.humidity,s=t.icon,h=t.imperial,u=t.locationHandler,d=t.preciseLocation;return Object(a.jsxs)(this.Weather,{children:[d?Object(a.jsxs)(this.TransparentButton,{onClick:u,disabled:!0,style:{opacity:"0.7"},children:["Use precise location ",Object(a.jsx)(j.a,{name:"location arrow"})]}):Object(a.jsxs)(this.TransparentButton,{onClick:u,children:["Use precise location ",Object(a.jsx)(j.a,{name:"location arrow"})]}),e?Object(a.jsxs)("h1",{children:[e,", ",n]}):Object(a.jsx)("h1",{children:i}),Object(a.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(s,"@2x.png")}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:h?"".concat(p(r,"f")," \xb0F"):"".concat(p(r,"c")," \xb0C")}),Object(a.jsx)("h2",{children:o})]}),Object(a.jsxs)("h4",{children:["Feels like: ",h?"".concat(p(c,"f")," \xb0F"):"".concat(p(c,"c")," \xb0C")]}),Object(a.jsxs)("h4",{children:["Humidity: ",l,"%"]})]})}}]),n}(i.Component),x=n(73);function O(){var t=Object(d.a)(["\n      display: flex;\n      justify-content: flex-start;\n      width: 100%;\n      padding: 10px;\n      margin: 20px auto 10px auto;\n      overflow-x: scroll;\n    "]);return O=function(){return t},t}function g(){var t=Object(d.a)(["\n      max-width: 70%;\n      margin-left: auto;\n      margin-right: auto;\n    "]);return g=function(){return t},t}var v=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).Weather=f.a.div(g()),a.WeatherWrapper=f.a.div(O()),a}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.props.weather.map((function(e,n){var i,r=(i=n,x.a.now().add(i,"hour").format("{hour} {ampm}"));return Object(a.jsxs)("div",{style:{padding:"10px"},children:[Object(a.jsx)("h4",{children:t.props.imperial?"".concat(p(e.temp,"f")," \xb0F"):"".concat(p(e.temp,"c")," \xb0C")}),Object(a.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(e.icon,".png")}),Object(a.jsx)("h4",{children:e.weatherMain}),Object(a.jsx)("hr",{}),Object(a.jsx)("h4",{children:r})]},n)}));return Object(a.jsxs)(this.Weather,{children:[Object(a.jsx)("h2",{style:{textAlign:"left"},children:"Hourly"}),Object(a.jsx)(this.WeatherWrapper,{children:e||null})]})}}]),n}(i.Component);function w(){var t=Object(d.a)(["\n      display: flex;\n      justify-content: flex-start;\n      width: 100%;\n      padding: 10px;      \n      margin: 20px auto 10px auto;\n      overflow-x: scroll;\n    "]);return w=function(){return t},t}function W(){var t=Object(d.a)(["\n      max-width: 70%;\n      margin-left: auto;\n      margin-right: auto;\n    "]);return W=function(){return t},t}var k=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).Weather=f.a.div(W()),a.WeatherWrapper=f.a.div(w()),a}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.props.weather.map((function(e,n){var i,r=(i=n,x.a.now().add(i,"day").format("{day} {date}")),c={day:t.props.imperial?"".concat(p(e.temp.day,"f")," \xb0F"):"".concat(p(e.temp.day,"c")," \xb0C"),night:t.props.imperial?"".concat(p(e.temp.night,"f")," \xb0F"):"".concat(p(e.temp.night,"c")," \xb0C")};return Object(a.jsxs)("div",{style:{padding:"10px"},children:[Object(a.jsxs)("h4",{children:["\ud83d\udd06",c.day," /\ud83c\udf19 ",c.night]}),Object(a.jsx)("h4",{style:{whiteSpace:"pre-wrap"},children:r})]},n)}));return Object(a.jsxs)(this.Weather,{children:[Object(a.jsx)("h2",{style:{textAlign:"left"},children:"Daily"}),Object(a.jsx)(this.WeatherWrapper,{children:e||null})]})}}]),n}(i.Component),C=n(150),L=n(148),M=n(147),F=n(149),R=n(51),S=n.n(R),I=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).updateStateLocation=function(t,e){var n,i,r,c,o,l;"ip"===e?(n=t.data.latitude,i=t.data.longitude,r=!1):(n=t.coords.latitude,i=t.coords.longitude,r=!0),a.setState({preciseLocation:r,location:{latitude:n,longitude:i}}),c=a.handleWeatherResponse,o=a.state.location.latitude,l=a.state.location.longitude,S.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(o,"&lon=").concat(l,"&&appid=997d9b54abada6ff84291820778b192d")).then((function(t){return c(t)})).catch((function(t){return console.log(t)})),function(t,e,n){S.a.get("https://us1.locationiq.com/v1/reverse.php?key=pk.026f9b5e94ef539558116a8c355cd29f&lat=".concat(e,"&lon=").concat(n,"&zoom=10&format=json")).then((function(e){return t(e)})).catch((function(t){return console.log(t)}))}(a.handleReverseGeocodingResponse,a.state.location.latitude,a.state.location.longitude)},a.handleWeatherResponse=function(t){var e=t.data.current,n=e.temp,i=e.feels_like,r=e.weather,c=e.humidity,o={temp:n,feelsLike:i,weatherMain:r[0].main,humidity:c,icon:r[0].icon},l=[];t.data.hourly.forEach((function(e){if(t.data.hourly.indexOf(e)<24){var n={temp:e.temp,weatherMain:e.weather[0].main,icon:e.weather[0].icon};l.push(n)}}));var s=[];t.data.daily.forEach((function(e){if(t.data.daily.indexOf(e)<8){var n={temp:{day:e.temp.day,night:e.temp.night},weatherMain:e.weather[0].main,humidity:e.humidity,icon:e.weather[0].icon};s.push(n)}})),a.setState({weatherInfoReady:!0,currentWeather:o,hourlyWeather:l,dailyWeather:s})},a.handleReverseGeocodingResponse=function(t){var e=t.data,n=e.lat,i=e.lon,r=e.address,c=e.display_name;a.setState({location:{latitude:n,longitude:i,city:r.city?r.city:null,country:r.country,displayName:c}})},a.state={preciseLocation:!1,weatherInfoReady:!1,imperial:!1,location:{latitude:null,longitude:null,city:null,country:null,displayName:null,id:null},currentWeather:{temp:null,feelsLike:null,weatherMain:null,humidity:null,icon:null},hourlyWeather:[{temp:null,weatherMain:null,icon:null}],dailyWeather:[{temp:{day:null,night:null},weatherMain:null,humidity:null,icon:null}]},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t;t=this.updateStateLocation,S.a.get("https://ipapi.co/json/").then((function(e){t(e,"ip")})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){var t=this;return this.state.weatherInfoReady?Object(a.jsxs)("div",{children:[Object(a.jsx)(y,{city:this.state.location.city,country:this.state.location.country,displayName:this.state.location.displayName,temp:this.state.currentWeather.temp,feelsLike:this.state.currentWeather.feelsLike,main:this.state.currentWeather.weatherMain,humidity:this.state.currentWeather.humidity,icon:this.state.currentWeather.icon,imperial:this.state.imperial,locationHandler:function(){return e=t.updateStateLocation,void window.navigator.geolocation.getCurrentPosition(e);var e},preciseLocation:this.state.preciseLocation}),Object(a.jsx)(v,{weather:this.state.hourlyWeather,imperial:this.state.imperial}),Object(a.jsx)(k,{weather:this.state.dailyWeather,imperial:this.state.imperial})]}):Object(a.jsx)("div",{children:Object(a.jsxs)(C.a,{style:{width:"100vw",height:"100vh"},children:[Object(a.jsx)(L.a,{active:!0,inverted:!0,children:Object(a.jsxs)(M.a,{indeterminate:!0,inverted:!0,children:[Object(a.jsx)("h1",{children:"Please wait..."}),Object(a.jsx)("h3",{children:"Fetching data"}),Object(a.jsx)("h4",{children:"If it's stuck, try turning off an ad-blocking software"})]})}),Object(a.jsx)(F.a,{src:"/images/wireframe/short-paragraph.png"})]})})}}]),n}(i.Component);var N=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(I,{})})},B=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,151)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,c=e.getTTFB;n(t),a(t),i(t),r(t),c(t)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),B()}},[[135,1,2]]]);
//# sourceMappingURL=main.17587c1f.chunk.js.map