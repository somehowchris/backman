/*! Built with http://stenciljs.com */
var SelectActionTypes;!function(t){t.setSelectionBatch="SET_SELECTION_BATCH",t.select="SELECT",t.commitSelectionBatch="COMMIT_SELECTION_BATCH",t.setMultiple="SET_MULTIPLE",t.setDirection="SET_DIRECTION",t.setSelect="SET_SELECT",t.setAnimationDuration="SET_ANIMATION_DURATION",t.toggleOptionEl="TOGGLE_OPTION_EL",t.commitOptionElsBatch="COMMIT_OPTION_ELS_BATCH",t.toggleOptGroupEl="TOGGLE_OPTGROUP_EL",t.commitOptGroupElsBatch="COMMIT_OPTGROUP_ELS_BATCH",t.setFilter="SET_FILTER",t.setFilterFunction="SET_FILTER_FUNCTION"}(SelectActionTypes||(SelectActionTypes={}));var selectReducer=function(t,e){switch(void 0===t&&(t={}),e.type){case SelectActionTypes.setSelectionBatch:return Object.assign({},t,{selectionBatch:e.optionEls});case SelectActionTypes.commitSelectionBatch:var o=t.selectionSorted;return t.selection!==t.selectionBatch&&(o=t.selectionBatch.concat().sort(function(e,o){var c=t.optionElsSorted.indexOf(e),n=t.optionElsSorted.indexOf(o);return c>n?1:c<n?-1:0})),Object.assign({},t,{selection:t.selectionBatch,selectionSorted:o});case SelectActionTypes.select:var c=t.selectionBatch;if(e.optionEl)if(t.multiple){var n=c.indexOf(e.optionEl);c=n>-1||"remove"===e.strategy?c.filter(function(t){return t!==e.optionEl}):c.concat(e.optionEl)}else c[0]===e.optionEl?"remove"===e.strategy&&(c=[]):"add"===e.strategy&&(c=[e.optionEl]);else c.length&&(c=[]);return Object.assign({},t,{selectionBatch:c});case SelectActionTypes.setMultiple:return Object.assign({},t,{multiple:e.multiple});case SelectActionTypes.setDirection:return Object.assign({},t,{direction:e.direction});case SelectActionTypes.setSelect:return Object.assign({},t,{select:e.select});case SelectActionTypes.setAnimationDuration:return Object.assign({},t,{animationDuration:e.animationDuration});case SelectActionTypes.toggleOptionEl:return-1===t.optionElsBatch.indexOf(e.optionEl)?Object.assign({},t,{optionElsBatch:t.optionElsBatch.concat([e.optionEl])}):Object.assign({},t,{optionElsBatch:t.optionElsBatch.filter(function(t){return t!==e.optionEl})});case SelectActionTypes.toggleOptGroupEl:return-1===t.optgroupElsBatch.indexOf(e.optgroupEl)?Object.assign({},t,{optgroupElsBatch:t.optgroupElsBatch.concat([e.optgroupEl])}):Object.assign({},t,{optgroupElsBatch:t.optgroupElsBatch.filter(function(t){return t!==e.optgroupEl})});case SelectActionTypes.commitOptionElsBatch:var i=t.optionElsSorted;return t.optionEls!==t.optionElsBatch&&(i=t.optionElsBatch.concat().sort(function(t,e){var o=t.compareDocumentPosition(e);return o<=Node.DOCUMENT_POSITION_PRECEDING?-1:o<=Node.DOCUMENT_POSITION_FOLLOWING?1:0}).reverse()),Object.assign({},t,{optionEls:t.optionElsBatch,optionElsSorted:i});case SelectActionTypes.commitOptGroupElsBatch:return Object.assign({},t,{optgroupEls:t.optgroupElsBatch});case SelectActionTypes.setFilter:return Object.assign({},t,{filter:e.filter});case SelectActionTypes.setFilterFunction:return Object.assign({},t,{filterFunction:e.filterFunction});default:return t}};export{selectReducer as a,SelectActionTypes as b};