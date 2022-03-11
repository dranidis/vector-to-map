goog.provide('vector_to_map.core');
/**
 * Tranforms a vector of elements to a map with the stringified indices as keys.
 * e.g. [0 3 4] => {"0": 0 "1": 3 "2": 4}
 */
vector_to_map.core.vector__GT_map = (function vector_to_map$core$vector__GT_map(var_args){
var G__7450 = arguments.length;
switch (G__7450) {
case 1:
return vector_to_map.core.vector__GT_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return vector_to_map.core.vector__GT_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(vector_to_map.core.vector__GT_map.cljs$core$IFn$_invoke$arity$1 = (function (list){
return vector_to_map.core.vector__GT_map.cljs$core$IFn$_invoke$arity$2(list,(0));
}));

(vector_to_map.core.vector__GT_map.cljs$core$IFn$_invoke$arity$2 = (function (list,n){
if(cljs.core.empty_QMARK_(list)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vector_to_map.core.vector__GT_map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(list),(n + (1))),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)),cljs.core.first(list));
}
}));

(vector_to_map.core.vector__GT_map.cljs$lang$maxFixedArity = 2);

vector_to_map.core.if_vector_QMARK___GT_map = (function vector_to_map$core$if_vector_QMARK___GT_map(value){
if(cljs.core.vector_QMARK_(value)){
return vector_to_map.core.vector__GT_map.cljs$core$IFn$_invoke$arity$1(value);
} else {
return value;
}
});

//# sourceMappingURL=vector_to_map.core.js.map
