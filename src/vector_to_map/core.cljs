(ns vector-to-map.core)

;;
;; Utility functions for transforming lists to maps
;; Firebase returns a list when the keys are numbers 0, 1, 2
;;
(defn- vector->map
  "Tranforms a vector of elements to a map with the stringified indices as keys.
   e.g. [0 3 4] => {\"0\": 0 \"1\": 3 \"2\": 4}"
  ([list] (vector->map list 0))
  ([list n]
   (if (empty? list) {}
       (assoc (vector->map (rest list) (inc n)) (keyword (str n)) (first list)))))

;; 10 times faster
(defn apply-fn-tovalues [f m]
  (reduce-kv (fn [m k v] (assoc m k (f v)))
             {} m))

;; (defn- apply-fn-tovalues
;;   [function a-map]
;;   (if (= {} a-map)
;;     a-map
;;     (apply merge (map
;;                   (fn [[key value]] {key (function value)})
;;                   (seq a-map)))))

(defn if-vector?->map
  [value]
  (cond
    (vector? value) (vector->map value)
    (map? value) (apply-fn-tovalues if-vector?->map value)
    :else value))

1





