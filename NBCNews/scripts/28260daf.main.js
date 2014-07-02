function _getPixelmanTargeting(){return window.__nbcudigitaladops_inject&&window.__nbcudigitaladops_inject.getGPT&&window.__nbcudigitaladops_inject.getGPT()}function getAnalyticsState(){var a,b,c=_.compact(_.tail(window.location.pathname.split("/")));return 0===c.length?{instance:FrontAnalyticsState.create({cover:!0}),initialEvent:"pageviewOther"}:3===c.length?{instance:StackAnalyticsState.create({content:bootstrapJson.results[0]}),initialEvent:"pageviewArticle"}:(a=c[0],"nightly-news"===a||"meet-the-press"===a||"dateline"===a?{instance:FrontAnalyticsState.create({show:a}),initialEvent:"pageviewOther"}:(b=c[1],"storyline"===a?{instance:FrontAnalyticsState.create({storyline:b}),initialEvent:"pageviewOther"}:"feature"===a?{instance:FrontAnalyticsState.create({feature:b}),initialEvent:"pageviewOther"}:"search"===a?{instance:FrontAnalyticsState.create({search:b}),initialEvent:"pageviewSearch"}:{instance:FrontAnalyticsState.create({section:a,topic:b}),initialEvent:"pageviewOther"}))}function requestMps(a){var b,c;b=0===window.location.host.indexOf("sys")||-1===window.location.host.indexOf(".com")?"stage.mps.nbcnews.com":"mps.nbcnews.com",c="http://"+b+"/request/page/jsonp/params?";var d={};return $.extend(d,a),"article"==d.type&&delete d.type,d.field="{url: "+window.location.host+window.location.pathname+"-ie8}",d.readonly=1,$.ajax(c,{dataType:"jsonp",data:d,cache:!0,jsonpCallback:"mps"+(a.path||"").replace(/[\/-]/g,"_")})}function getMpsParams(){var a,b,c=_.compact(_.tail(window.location.pathname.split("/")));return 0===c.length?MpsFrontParams.create({cover:!0}):3===c.length?MpsStackParams.create({content:bootstrapJson.results[0]}):(a=c[0],"nightly-news"===a||"meet-the-press"===a||"dateline"===a?MpsFrontParams.create({show:a}):(b=c[1],MpsFrontParams.create("storyline"===a?{storyline:b}:"feature"===a?{feature:b}:{section:a,topic:b})))}function createPlacement(a,b){var c="gpt-"+a+"-"+adIndex++,d=$(document.createElement("div")).addClass("ad-placement").addClass("ad-"+a).addClass(b),e=$(document.createElement("div")).addClass("ad-content").attr("id",c).appendTo(d);return{$container:d,$content:e,id:c}}function applyPlacements(a){var b=placementStrategies[a]||placementStrategies._default;return b.call(null)}function mapDivsToData(a,b){var c=_.reduce(b,function(b,c,d){var e,f,g=null;return a.components[d]?(g=a.components[d],e="component"):(g=_.find(a.dart.params.adunits,function(a){return a.adunit_slotname===d}),g&&(e="gpt")),g?(g.__location=d,f=_.map(c,function(a){return{divId:a.id,$container:a.$container,$content:a.$content,data:g}}),b[e]=b[e].concat(f),b):b},{gpt:[],component:[]});return c}function initializeSlots(a,b){var c=a.gpt;if(0===c.length)return a;var d=_getPixelmanTargeting();return GptWrapper.pushCmd(function(e){return _.each(c,function(a){var c=GptWrapper.defineInPageSlot(e,b,a.data,a.divId,d);a.unit=c}),e.pubads().collapseEmptyDivs(),e.enableServices(),a})}function testFlexAd(a){var b=!1,c=a.$content.height();c&&c>400?a.$container.addClass("ad-container-300x600"):b=!0,b&&++flexAdTests<6&&window.setTimeout(function(){testFlexAd(a)},250*flexAdTests)}function renderSlots(a,b){var c=$(document.createElement("a")).addClass("ad-label").attr("href","http://www.nbcnews.com/id/31066137/media-kit/").attr("target","_blank").text("advertisement");return _.each(a.component,function(a){a.$content.html(a.data.data),a.$container.prepend(c.clone())}),GptWrapper.pushCmd(function(d){_.each(a.gpt,function(a){a.unit.instance&&(d.display(a.divId),a.$container.prepend(c.clone()),"article"!==b&&"topmulti"===a.data.__location&&testFlexAd(a))})})}function initializeAnalytics(){window.analyticsReferrer=document.referrer;var a=getAnalyticsState();a.instance.track(a.initialEvent)}function initializeAds(){var a=getMpsParams().get("params");a.type=a.type||"cover";var b=applyPlacements(a.type);requestMps(a).then(function(a){var c=mapDivsToData(a,b);return initializeSlots(c,a.page.gpt_adid)}).then(function(b){return renderSlots(b,a.type)})}function viewBindings(){$("img.js-lazy").lazyload()}function setWeatherPanel(a,b){$("#weather_city").html(a.weather.city),$("#weather_conditions_temp").html(a.weather.conditions.temp),$("#weather_conditions_update").html(a.weather.conditions.update),$("#weather_conditions_text").html(a.weather.conditions.text),$(".weather-zip").attr("href","http://www.weather.com/weather/today/"+b)}function renderLocalHeadlines(a){if(a.headlines){var b=$("#localnewslinks-tmpl").html(),c=window.Mustache;c.parse(b);var d=c.render(b,{headlines:a.headlines.slice(1,5)}),e=c.render(b,{headlines:a.headlines.slice(5,9)}),f=c.render(b,{affiliate:a.local.affiliate});$("#localnewscol1").html(d),$("#localnewscol2").html(e),$("#localnews-affiliate").html(f)}}function getLocalData(a){var b={dataType:"jsonp",jsonpCallback:"localSearch",cache:!0,url:"http://www.nbcnews.com/databox/data.aspx",data:{dbid:55384635,s:a}};b.success=function(b){setWeatherPanel(b,a),renderLocalHeadlines(b)},$.ajax(b)}function createIframe(a,b){var c=document.createElement("iframe");c.src=a,c.id="databox_iframe",c.height="0",c.style.display="none",$("body").append(c),$("#databox_iframe").on("load",b)}function refresh(){(new Date).getTime()-time>=6e4?window.location.reload(!0):setTimeout(refresh,24e4)}Array.prototype.firstObject=function(){return this[0]},Array.prototype.lastObject=function(){return this.length>0?this[this.length-1]:void 0};var get=function(a,b){var c=a;return _.every(b,function(a){if(c[a])c=_.result(c,a);else{if(!c.content)return c=void 0,!1;c=_.result(c,"content"),c=c[a]?_.result(c,a):void 0}return!_.isUndefined(c)}),c},accessors={get:function(a){return get(this,a.split("."))},set:function(a,b){var c=a.split("."),d=get(this,_.initial(c));d&&(d[_.last(c)]=b)}},Base=function(){};_.extend(Base.prototype,accessors),Base.create=function(a){var b=new this;for(var c in a)_.has(a,c)&&(b[c]=a[c]);return b},Base.extend=function(a,b){var c,d=this;c=a&&_.has(a,"constructor")?a.constructor:function(){return d.apply(this,arguments)},_.extend(c,d,b);var e=function(){this.constructor=c};return e.prototype=d.prototype,c.prototype=new e,a&&_.extend(c.prototype,a),c.__super__=d.prototype,c};var GptWrapper=function(a){function b(){return h||"undefined"!=typeof window.googletag||(window.googletag={cmd:[]},a.getScript("http://www.googletagservices.com/tag/js/gpt.js")),window.googletag}function c(c){var d=a.Deferred(),e=b();return e.cmd.push(function(){var a;h=!0;try{a=c(e)}catch(b){d.reject(b)}d.resolve(a)}),d.promise()}function d(a,b,c,d,g){var h=a.defineSlot(b,c.sizes,d);return h?(e(h,c.targeting),g&&e(h,g),f(h,c),h.addService(a.pubads()),{slotname:c.adunit_slotname,div_id:d,instance:h,in_page:!0,displayed:!1}):null}function e(a,b){for(var c in b)a.setTargeting(c,b[c])}function f(a,b){for(var c=0;c<b.category_exclusions.length;c++)a.setCategoryExclusion(b.category_exclusions[c]);for(var d=0;d<b.unit_category_exclusions.length;d++)a.setCategoryExclusion(b.unit_category_exclusions[d])}var g={},h=!1;return g.defineInPageSlot=d,g.pushCmd=c,g}($),AnalyticsStateBase=function(){var a,b,c;if("undefined"!=typeof _satellite){b=_.reduce(_satellite.directCallRules,function(a,b){return a[b.name]=b,a},{}),_satellite.getObjectProperty=function(a,b,c){for(var d,e=b.split("."),f=a,g=_satellite.specialProperties,h=0,i=e.length;i>h;h++){if(null===f||void 0===f)return void 0;var j=e[h];if(c&&"@"===j.charAt(0)){var k=j.slice(1);f=g[k](f)}else if(f.getAttribute&&(d=j.match(/^getAttribute\((.+)\)$/))){var l=d[1];f=f.getAttribute(l)}else f instanceof Base?(f=f.get(j),"undefined"==typeof f&&(f=""),_satellite.notify("GetProperty "+j+": "+f,1)):f=f[j]}return f};var d=_satellite.getVar;_satellite.getVar=function(a,b,c){var e=_satellite.dataElements[a]&&_satellite.dataElements[a].jsVariable;return b instanceof Base&&e&&0===e.indexOf("this.")?_satellite.getObjectProperty(b,e.slice(5),!0):d.call(_satellite,a,b,c)},c=function(a){var c=this,d=b[a];return d?void _.defer(function(){window.analyticsState=c,_satellite.notify('Direct call Rule "'+a+'" fired.',1),_satellite.fireRule(d,c,{type:a})}):void _satellite.notify('Direct call Rule "'+a+'" not found.',1)}}else c=function(){};return a=Base.extend({track:c})}(),StackAnalyticsState=AnalyticsStateBase.extend({documentId:function(){return this.get("id")},title:function(){return this.get("headline")},pageName:function(){return[this.get("brand"),this.get("type"),this.get("title")].join(":")},canonicalUrl:function(){return this.get("canonical_url")},emphasis:function(){return this.get("breaking_news")?"breaking":void 0},brand:"NBCNews",authors:function(){return _.chain(this.get("bylines")).map(function(a){return a.name?a.name.toLowerCase():null}).compact().value().join(",")},primarySection:function(){return this.get("sections.firstObject.slug")},primaryTopic:function(){return this.get("topics.firstObject.slug")},secondarySections:function(){_.map(this.get("sections").slice(1),function(){return x.slug}).join(",")},secondarySections:function(){_.map(this.get("topics").slice(1),function(){return x.slug}).join(",")},storyline:function(){return this.get("content.storyline.firstObject.slug")},feature:function(){return this.get("content.feature.firstObject.slug")},show:function(){return this.get("content.show.firstObject.slug")},published:function(){return this.get("last_published_utc")},contentType:function(){return this.get("content.type")}}),FrontAnalyticsState=AnalyticsStateBase.extend({topLevelTypeAndSlug:function(){var a=this,b=_.find(["cover","show","storyline","feature","topic","section","latest","search","error"],function(b){return!!a.get(b)});return b?[b,this.get(b)]:null},pathParts:function(){var a=[],b=this.topLevelTypeAndSlug();if(!b)return a;var c=b[0],d=b[1];switch(c){case"show":case"section":a.push(d);break;case"topic":a.push(this.get("section")),a.push(d);break;case"latest":a.push(c);break;case"storyline":case"feature":case"search":case"error":a=a.concat(_.compact(b))}return a},toPathString:function(a){return(a||[]).concat(this.pathParts()).join("/")},documentId:function(){return this.toPathString()},title:function(){var a=[this.get("brand")],b=this.get("topLevelTypeAndSlug"),c=b[0];return"topic"===c&&a.push("section:"+this.get("section")),a.push("cover"===c?"cover":b.join(":")),a.join("|")},pageName:function(){return this.get("title")},canonicalUrl:function(){return this.toPathString(["http://preview.nbcnews.com"])},canonicalPathParts:function(){return this.pathParts()},contentType:function(){return this.get("topLevelTypeAndSlug.firstObject")},brand:"NBCNews",primarySection:function(){return this.get("section")},primaryTopic:function(){return this.get("topic")},searchTerm:function(){return this.get("search")}}),MpsParamsBase=Base.extend({site:"nbcnews",params:function(){var a=["branding","cat","content_id","is_content","path","site","type","content_id"],b=["feature","storyline","sect","topic","show","wb_slideshow_id","byline","breakingnews"],c=this,d=_.reduce(a,function(a,b){var d=c.get(b);return"undefined"!=typeof d&&d!==!1&&""!==d&&(a[b]=d),a},{});return d=_.reduce(b,function(a,b){var d=c.get(b);return"undefined"!=typeof d&&d!==!1&&""!==d&&(a["cag["+b+"]"]=d),a},d)}}),MpsStackParams=MpsParamsBase.extend({params:function(){var a=this.get("externalSource").toLowerCase();return"newscms"!==a?MpsStackParams.__super__.params.call(this):{site:this.get("site"),path:this.get("path")}},path:function(){var a,b=this.get("canonical_url");return b?(a=b.split("/").slice(3,-1).concat([this.get("content_id")]).join("/"),"/"+a):void 0},byline:function(){return _.map(this.get("bylines"),function(a){return a.name}).join("|")},is_content:1,branding:function(){return this.get("show")||"nbc news"},sect:function(){return _.map(this.get("sections"),function(a){return a.slug||null}).join("|")},topic:function(){return _.map(this.get("topics"),function(a){return a.slug||null}).join("|")},cat:function(){return _.filter([this.get("sections.firstObject.slug"),this.get("topics.firstObject.slug")],function(a){return a}).join("|")},storyline:function(){return this.get("content.storyline.firstObject.slug")},feature:function(){return this.get("content.feature.firstObject.slug")},show:function(){return this.get("content.show.firstObject.slug")},breakingnews:function(){return Number(!!this.get("breaking_news"))},content_id:function(){var a,b=this.get("externalId")||"",c=this.get("externalSource").toLowerCase();return"newscms"===c?a="n":"newsvine"===c?a="v":(b=b.replace("entries/",""),a="f"),a+b}}),MpsFrontParams=MpsParamsBase.extend({topLevelTypeAndSlug:function(){var a=this,b=_.find(["cover","show","storyline","feature","topic","section","latest","search","error"],function(b){return!!a.get(b)});return b?[b,this.get(b)]:null},pathParts:function(){var a=[],b=this.topLevelTypeAndSlug();if(!b)return a;var c=b[0],d=b[1];switch(c){case"show":case"section":a.push(d);break;case"topic":a.push(this.get("section")),a.push(d);break;case"latest":a.push(c);break;case"storyline":case"feature":case"search":case"error":a=a.concat(_.compact(b))}return a},toPathString:function(a){return(a||[]).concat(this.pathParts()).join("/")},path:function(){return this.get("cover")?"/cover":this.toPathString([""])},type:function(){return this.get("topLevelTypeAndSlug.firstObject")},is_content:0,site:"nbcnews",branding:function(){return this.get("show")||"nbc news"},sect:function(){return this.get("section")},cat:function(){var a,b,c;return this.get("cover")?"cover":(c=this.get("storyline")||this.get("show")||this.get("feature"))?[c,"front"].join("|"):(a=this.get("section"),b=this.get("topic"),a||b?_.compact([a,b,"front"]).join("|"):void 0)},params:function(){var a=["branding","cat","content_id","is_content","path","site","type","content_id"],b=["feature","storyline","sect","topic","show","wb_slideshow_id","byline","breakingnews"],c=this,d=_.reduce(a,function(a,b){var d=c.get(b);return"undefined"!=typeof d&&d!==!1&&""!==d&&(a[b]=d),a},{});return d=_.reduce(b,function(a,b){var d=c.get(b);return"undefined"!=typeof d&&d!==!1&&""!==d&&(a["cag["+b+"]"]=d),a},d)}}),adIndex=0,placementStrategies={article:function(){var a,b=9,c={},d=$(".site-content"),e=$(".stack-sidebar").empty(),f=$(".stack-l-story"),g=f.height(),h=createPlacement("topbannerstack"),i=createPlacement("outbrain3x3");return d.prepend(h.$container),c.topbannerstack=[h],f.append(i.$container),c.outbrain=[i],a=1+Math.min(Math.floor(g/700),b-1),_.each(_.range(a),function(a){var b,d="topmulti";a%2&&(d=1===a?"sidebarflexone":"adsense300x250"),b=createPlacement(d),a>0&&b.$container.css({paddingTop:250}),e.append(b.$container),c[d]=c[d]||[],c[d].push(b)}),c},cover:function(){var a={};return $(".ad-unit").each(function(b,c){var d,e,f;e="boxfront",e&&(d=createPlacement(e,f),$(c).before(d.$container),a[e]=a[e]||[],a[e].push(d))}),a},_default:function(){var a={};return $(".site-content > .panel").each(function(b,c){var d,e,f;0===b?e="topbannerfront":2===b?(e="boxfront",f="panel"):7===b?(e="topmulti",f="panel panel-ad-flex"):b-7>0&&(b-7)%6===0&&(e="boxfront",f="panel"),e&&(d=createPlacement(e,f),$(c).before(d.$container),a[e]=a[e]||[],a[e].push(d))}),a}},flexAdTests=0;$(function(){initializeAnalytics(),initializeAds()}),$(function(){viewBindings(),$(document).on("click",".toggle-gallery-button",function(a){$(".toggle-gallery-button").toggle(),$("#"+$(a.target).data("externalid")+" > .container > .gallerywrapper").toggle()}),$(".js-toggle-menu").click(function(){$(".dropdown").toggleClass("is-open")});var a=$(".js-scroll-header"),b=a.offset().top;$(document).on("scroll",function(){var c=$(document).scrollTop();c>b?$(".is-fixed")[0]||(a.addClass("is-fixed"),$("body").addClass("js-nav-is-fixed")):(a.removeClass("is-fixed"),$("body").removeClass("js-nav-is-fixed"))}),$(window).scroll(function(){if($(".article").html()&&$(window).scrollTop()===$(document).height()-$(window).height()){var a=$(".article:last").data("next");$.get("/article/"+a,function(a){$($(".article",a)).insertAfter(".article:last"),viewBindings()})}})}),$(function(){if($.cookie("P2")){var a=$.cookie("P2").split("=")[1];getLocalData(a)}else console.log("$$$ NO P2"),createIframe("http://www.nbcnews.com/databox/data.aspx?dbid=23283610",function(){if($.cookie("P2")){var a=$.cookie("P2").split("=")[1];getLocalData(a)}})});var time=(new Date).getTime();$(document.body).bind("mousemove keypress",function(){time=(new Date).getTime()}),setTimeout(refresh,24e4);