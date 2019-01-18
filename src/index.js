/**
 * Export functions you want to work with, see documentation for details:
 * https://github.com/zeplin/zeplin-extension-documentation
 */

function layer(context, selectedLayer) {

    let object = 'builder.append';
    let result = {};

    let x = Math.floor(selectedLayer.rect.x);
    let y = Math.floor(selectedLayer.rect.y);
    let width = Math.floor(selectedLayer.rect.width);
    let height = Math.floor(selectedLayer.rect.height);
    let radius = Math.floor(selectedLayer.borderRadius);
    let rect = ".init(x: " + x + ", y: " + y + ", width: " + width +  ", height: "+ height + "))";

    if (radius == height/2 && radius == width/2) {
      object += "OvalPath(from: " + rect ;
    } else if (radius > 0) {
      object += "RectPath(cornerRadius: "+ radius + ", from: " + rect ;
    } else {
      object += "RectPath(from: " + rect ;
    }

    result = {
      code: object,
      language: 'swift'
    };

    return {
      code: object,
      language: 'swift'
    };
}

export default {
    layer
};
