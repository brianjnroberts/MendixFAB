define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",
    "dijit/_TemplatedMixin",

    "mxui/dom",
    "dojo/dom",
    "dojo/dom-prop",
    "dojo/dom-geometry",
    "dojo/dom-class",
    "dojo/dom-style",
    "dojo/dom-construct",
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/text",
    "dojo/html",
    "dojo/_base/event",
    "FAB/lib/jquery-1.11.2",
    "FAB/lib/materializeFAB",
    "FAB/lib/jquery-velocity",
    "dojo/text!FAB/widget/template/FAB.html"

], function(declare, _WidgetBase, _TemplatedMixin, dom, dojoDom, dojoProp, dojoGeometry, dojoClass, dojoStyle, dojoConstruct, dojoArray, lang, dojoText, dojoHtml, dojoEvent, _jQuery, matFab, jqVel, template) {
    "use strict";

    var $ = _jQuery.noConflict(true);

    return declare("FAB.widget.FAB", [_WidgetBase, _TemplatedMixin], {
        templateString: template,

        // Internal variables.
        _handles: null,
        _contextObj: null,

        //modeler
        actions: null,
        baseClass: null,

        constructor: function() {
            this._handles = [];
        },

        postCreate: function() {
            logger.debug(this.id + ".postCreate");
        },

        update: function(obj, callback) {
            logger.debug(this.id + ".update");

            this._contextObj = obj;
            this._updateRendering(callback);
        },

        resize: function(box) {
            logger.debug(this.id + ".resize");
        },

        uninitialize: function() {
            logger.debug(this.id + ".uninitialize");
        },

        _renderFAB: function() {
            var ulNode = this.fabul,
                baseFab = this.baseButton,
                baseDiv = this.baseDiv;

            dojoClass.add(baseFab, this.baseClass);

            this.actions.forEach(lang.hitch(this, function(action) {
                var i = document.createElement('i'),
                    a = document.createElement('a'),
                    li = document.createElement('li');

                dojoClass.add(i, action.className);

                a.style.backgroundColor = (action.color ? action.color : 'tomato');

                a.addEventListener('click', lang.hitch(this, function(e) {
                    mx.data.action({
                        params: {
                            actionname: action.microflow,
                            applyto: "selection",
                            guids: [this._contextObj.getGuid()]
                        },
                        callback: function(res) {
                            // yay!
                        },
                        error: function(err) {
                            // console.log(err)
                        }
                    });
                }));

                a.className = 'btn-floating';
                a.appendChild(i);
                li.appendChild(a);
                li.dataset.label = action.label;
                ulNode.appendChild(li);
            }));
            // div.fixed-action-btn[.horizontal]
            //   a.btn-floating.btn-large.red
            //     i.lage.material-icons
            //   ul
            //     li
            //       a.btn-floating[.red|.yellow|.green|.blue]
            //         i.material-icons

        },

        _updateRendering: function(callback) {
            logger.debug(this.id + "._updateRendering");

            if (this._contextObj !== null) {
                dojoStyle.set(this.domNode, "display", "block");
            } else {
                dojoStyle.set(this.domNode, "display", "none");
            }

            this._renderFAB();
            this._executeCallback(callback);
        },

        _executeCallback: function(cb) {
            if (cb && typeof cb === "function") {
                cb();
            }
        }
    });
});

require(["FAB/widget/FAB"]);