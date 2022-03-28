define(["./Cartesian2-08065eec","./Check-be2d5acb","./when-ad3237a0","./EllipseOutlineGeometry-df33fba6","./Math-5ca9b250","./GeometryOffsetAttribute-03006e80","./Transforms-1142ce48","./combine-1510933d","./RuntimeError-767bd866","./ComponentDatatype-a867ddaa","./WebGLConstants-1c8239cc","./EllipseGeometryLibrary-002b2f96","./GeometryAttribute-da891979","./GeometryAttributes-27dc652d","./IndexDatatype-9504f550"],function(r,e,n,l,i,t,s,o,a,d,u,c,m,p,y){"use strict";function G(e){var i=(e=n.defaultValue(e,n.defaultValue.EMPTY_OBJECT)).radius,e={center:e.center,semiMajorAxis:i,semiMinorAxis:i,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,numberOfVerticalLines:e.numberOfVerticalLines};this._ellipseGeometry=new l.EllipseOutlineGeometry(e),this._workerName="createCircleOutlineGeometry"}G.packedLength=l.EllipseOutlineGeometry.packedLength,G.pack=function(e,i,t){return l.EllipseOutlineGeometry.pack(e._ellipseGeometry,i,t)};var _=new l.EllipseOutlineGeometry({center:new r.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),f={center:new r.Cartesian3,radius:void 0,ellipsoid:r.Ellipsoid.clone(r.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,numberOfVerticalLines:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0};return G.unpack=function(e,i,t){i=l.EllipseOutlineGeometry.unpack(e,i,_);return f.center=r.Cartesian3.clone(i._center,f.center),f.ellipsoid=r.Ellipsoid.clone(i._ellipsoid,f.ellipsoid),f.height=i._height,f.extrudedHeight=i._extrudedHeight,f.granularity=i._granularity,f.numberOfVerticalLines=i._numberOfVerticalLines,n.defined(t)?(f.semiMajorAxis=i._semiMajorAxis,f.semiMinorAxis=i._semiMinorAxis,t._ellipseGeometry=new l.EllipseOutlineGeometry(f),t):(f.radius=i._semiMajorAxis,new G(f))},G.createGeometry=function(e){return l.EllipseOutlineGeometry.createGeometry(e._ellipseGeometry)},function(e,i){return(e=n.defined(i)?G.unpack(e,i):e)._ellipseGeometry._center=r.Cartesian3.clone(e._ellipseGeometry._center),e._ellipseGeometry._ellipsoid=r.Ellipsoid.clone(e._ellipseGeometry._ellipsoid),G.createGeometry(e)}});
