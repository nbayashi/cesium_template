/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.114
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import {
  EllipseOutlineGeometry_default
} from "./chunk-PTQQUQC3.js";
import "./chunk-2HJWSU7B.js";
import "./chunk-NKPBIX7F.js";
import "./chunk-S6SKF6DT.js";
import "./chunk-VK3EJHWI.js";
import "./chunk-JY5YEZFA.js";
import "./chunk-F6SE42BK.js";
import "./chunk-WZU2YLWG.js";
import "./chunk-QZAD5O7I.js";
import "./chunk-GEJTYLCO.js";
import {
  Cartesian3_default,
  Ellipsoid_default
} from "./chunk-72SANQJV.js";
import "./chunk-RV7ZYPFT.js";
import "./chunk-6HZQPRUS.js";
import "./chunk-JXDC723O.js";
import "./chunk-5M3U6ZMA.js";
import "./chunk-S4MAZ3SS.js";
import {
  defined_default
} from "./chunk-UGK3FCDY.js";

// packages/engine/Source/Workers/createEllipseOutlineGeometry.js
function createEllipseOutlineGeometry(ellipseGeometry, offset) {
  if (defined_default(offset)) {
    ellipseGeometry = EllipseOutlineGeometry_default.unpack(ellipseGeometry, offset);
  }
  ellipseGeometry._center = Cartesian3_default.clone(ellipseGeometry._center);
  ellipseGeometry._ellipsoid = Ellipsoid_default.clone(ellipseGeometry._ellipsoid);
  return EllipseOutlineGeometry_default.createGeometry(ellipseGeometry);
}
var createEllipseOutlineGeometry_default = createEllipseOutlineGeometry;
export {
  createEllipseOutlineGeometry_default as default
};