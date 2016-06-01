define(["exports","metal/src/metal","metal-dom/src/all/dom","metal-component/src/all/component","./IncrementalDomAop","./children/IncrementalDomChildren","./cleanup/IncrementalDomUnusedComponents","./utils/IncrementalDomUtils","./incremental-dom"],function(e,t,n,r,o,i,a,d){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var p=s(n),u=s(o),_=s(i),f=s(a),m=s(d),C=function(e){function n(t){h(this,n);var o=c(this,e.call(this,t));return t.context={},o.changes_={},o.eventsCollector_=new r.EventsCollector(t),t.on("attached",o.handleAttached_.bind(o)),t.on("detached",o.handleDetached_.bind(o)),o.component_.constructor.SYNC_UPDATES_MERGED||t.on("stateKeyChanged",o.handleStateKeyChanged_.bind(o)),o.handleInterceptedAttributesCall_=o.handleInterceptedAttributesCall_.bind(o),o.handleInterceptedOpenCall_=o.handleInterceptedOpenCall_.bind(o),o.handleChildrenCaptured_=o.handleChildrenCaptured_.bind(o),o.handleChildRender_=o.handleChildRender_.bind(o),o.renderInsidePatchDontSkip_=o.renderInsidePatchDontSkip_.bind(o),o}return l(n,e),n.prototype.addInlineListeners_=function(e){for(var n=0;n<e.length;n+=2){var r=e[n],o=e[n+1];this.isListenerAttr_(r)&&t.core.isString(o)&&this.listenersToAttach_.push({eventName:r.substr(7),fn:o})}},n.prototype.attachInlineListeners_=function(){this.eventsCollector_.startCollecting();for(var e=0;e<this.listenersToAttach_.length;e++){var t=this.listenersToAttach_[e];this.eventsCollector_.attachListener(t.eventName,t.fn)}this.eventsCollector_.detachUnusedListeners()},n.prototype.buildChildren_=function(e){return 0===e.length?y:e},n.prototype.buildRef=function(){var e=this.generatedRefCount_[this.currentPrefix_]||0;return this.generatedRefCount_[this.currentPrefix_]=e+1,this.currentPrefix_+"sub"+e},n.getComponentBeingRendered=function(){return g[g.length-1]},n.prototype.getSubComponent_=function(e,t){var n=this.component_.components[t.ref],r=this.component_.addSubComponent(t.ref,e,t,!0);return n&&n!==r&&(n.element=null,n.dispose()),r.wasRendered&&r.setState(t),r},n.prototype.guaranteeParent_=function(){var e=this.component_.element;if(!e||!e.parentNode){var t=document.createElement("div");return e&&p["default"].append(t,e),t}},n.finishedRenderingComponent=function(){g.pop()},n.prototype.handleAttached_=function(e){this.attachData_=e},n.prototype.handleDetached_=function(){this.eventsCollector_.detachAllListeners()},n.prototype.handleInterceptedAttributesCall_=function(e,n,r,o){if(this.isListenerAttr_(r)){var i=r.substr(7);t.core.isFunction(n[r])&&n.removeEventListener(i,n[r]),t.core.isFunction(o)&&p["default"].on(n,i,o)}"checked"===r&&(o=t.core.isDefAndNotNull(o)&&o!==!1),t.core.isBoolean(o)?(n[r]=o,o?n.setAttribute(r,""):n.removeAttribute(r)):e(n,r,o)},n.prototype.handleChildrenCaptured_=function(e){var t=this.componentToRender_,n=t.config,r=t.tag;n.children=this.buildChildren_(e.config.children),this.componentToRender_=null,this.currentPrefix_=this.prevPrefix_,this.prevPrefix_=null,this.renderFromTag_(r,n)},n.prototype.handleChildRender_=function(e){return e.tag&&m["default"].isComponentTag(e.tag)?(e.config.children=this.buildChildren_(e.config.children),this.renderFromTag_(e.tag,e.config),!0):void 0},n.prototype.handleComponentRendererStateKeyChanged_=function(t){this.handleStateKeyChanged_(t),e.prototype.handleComponentRendererStateKeyChanged_.call(this,t)},n.prototype.handleInterceptedOpenCall_=function(e,t){return m["default"].isComponentTag(t)?this.handleSubComponentCall_.apply(this,arguments):this.handleRegularCall_.apply(this,arguments)},n.prototype.handleRegularCall_=function(e,r,o,i){var a=t.array.slice(arguments,4);this.addInlineListeners_((i||[]).concat(a));var d=t.array.slice(arguments,1),s=n.getComponentBeingRendered(),h=s.getRenderer();!h.rootElementReached_&&s.config.key&&(d[1]=s.config.key);var c=e.apply(null,d);return this.updateElementIfNotReached_(c),c},n.prototype.handleStateKeyChanged_=function(e){this.changes_[e.key]=e},n.prototype.handleSubComponentCall_=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;t>r;r++)n[r-1]=arguments[r];var o=m["default"].buildConfigFromCall(n);o.ref=o.ref||this.buildRef(),this.componentToRender_={config:o,tag:n[0]},this.prevPrefix_=this.currentPrefix_,this.currentPrefix_=o.ref,this.generatedRefCount_[this.currentPrefix_]=0,_["default"].capture(this,this.handleChildrenCaptured_)},n.prototype.hasChangedBesidesElement_=function(){var e=Object.keys(this.changes_).length;return this.changes_.hasOwnProperty("element")&&e--,e>0},n.prototype.intercept_=function(){u["default"].startInterception({attributes:this.handleInterceptedAttributesCall_,elementOpen:this.handleInterceptedOpenCall_})},n.isIncDomNode=function(e){return!!e[_["default"].CHILD_OWNER]},n.prototype.isListenerAttr_=function(e){return"data-on"===e.substr(0,7)},n.prototype.getParent=function(){return this.parent_},n.prototype.getOwner=function(){return this.owner_},n.render=function(e,t,o){if(!r.Component.isComponentCtor(e)){var i=e,a=function(e){function t(){return h(this,t),c(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){i(this.config)},t}(r.Component);a.RENDERER=n,e=a}return r.Component.render(e,t,o)},n.prototype.render=function(){this.patch()},n.renderChild=function(e){e[_["default"].CHILD_OWNER].renderChild(e)},n.prototype.renderChild=function(e){this.intercept_(),_["default"].render(e,this.handleChildRender_),u["default"].stopInterception()},n.prototype.renderFromTag_=function(e,n){if(t.core.isString(e)||e.prototype.getRenderer){var r=this.renderSubComponent_(e,n);return this.updateElementIfNotReached_(r.element),r.element}return e(n)},n.prototype.renderIncDom=function(){this.component_.render?this.component_.render():IncrementalDOM.elementVoid("div")},n.prototype.renderInsidePatch=function(){return this.component_.wasRendered&&!this.shouldUpdate(this.changes_)&&IncrementalDOM.currentPointer()===this.component_.element?void(this.component_.element&&IncrementalDOM.skipNode()):void this.renderInsidePatchDontSkip_()},n.prototype.renderInsidePatchDontSkip_=function(){n.startedRenderingComponent(this.component_),this.changes_={},this.rootElementReached_=!1,f["default"].schedule(this.childComponents_||[]),this.childComponents_=[],this.generatedRefCount_={},this.listenersToAttach_=[],this.currentPrefix_="",this.intercept_(),this.renderIncDom(),u["default"].stopInterception(),this.attachInlineListeners_(),n.finishedRenderingComponent(),this.rootElementReached_?this.component_.addElementClasses():this.component_.element=null,this.emit("rendered",!this.component_.wasRendered)},n.prototype.renderSubComponent_=function(e,t){var r=this.getSubComponent_(e,t);this.updateContext_(r);var o=r.getRenderer();if(o instanceof n){var i=n.getComponentBeingRendered();i.getRenderer().childComponents_.push(r),o.parent_=i,o.owner_=this.component_,o.renderInsidePatch()}return r.wasRendered||r.renderAsSubComponent(),r},n.prototype.shouldUpdate=function(e){return this.component_.shouldUpdate?this.component_.shouldUpdate(e):!0},n.startedRenderingComponent=function(e){g.push(e)},n.prototype.patch=function(){if(!this.component_.element&&this.parent_)return void this.parent_.getRenderer().patch();var e=this.guaranteeParent_();if(e)IncrementalDOM.patch(e,this.renderInsidePatchDontSkip_),p["default"].exitDocument(this.component_.element),this.component_.element&&this.component_.inDocument&&this.component_.renderElement_(this.attachData_.parent,this.attachData_.sibling);else{var t=this.component_.element;IncrementalDOM.patchOuter(t,this.renderInsidePatchDontSkip_),this.component_.element||p["default"].exitDocument(t)}},n.prototype.update=function(){this.hasChangedBesidesElement_()&&this.shouldUpdate(this.changes_)&&this.patch()},n.prototype.updateElementIfNotReached_=function(e){var t=n.getComponentBeingRendered(),r=t.getRenderer();r.rootElementReached_||(r.rootElementReached_=!0,t.element!==e&&(t.element=e))},n.prototype.updateContext_=function(e){var r=e.context,o=n.getComponentBeingRendered(),i=o.getChildContext?o.getChildContext():{};t.object.mixin(r,o.context,i),e.context=r},n}(r.ComponentRenderer),g=[],y=[];e["default"]=C});