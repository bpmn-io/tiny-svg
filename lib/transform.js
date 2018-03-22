/**
 * transform accessor utility
 */

function wrapMatrix(transformList, transform) {
  if (transform instanceof SVGMatrix) {
    return transformList.createSVGTransformFromMatrix(transform);
  } else {
    return transform;
  }
}

function setTransforms(transformList, transforms) {
  var i, t;

  transformList.clear();

  for (i = 0; (t = transforms[i]); i++) {
    transformList.appendItem(wrapMatrix(transformList, t));
  }

  transformList.consolidate();
}

export default function transform(node, transforms) {
  var transformList = node.transform.baseVal;

  if (arguments.length === 1) {
    return transformList.consolidate();
  } else {
    if (transforms.length) {
      setTransforms(transformList, transforms);
    } else {
      transformList.initialize(wrapMatrix(transformList, transforms));
    }
  }
}