import { Component, VERSION } from '@angular/core';
import { order } from './data';
import objectDotKeys from './dotpath';
import { camelCase, get, zip, groupBy } from 'lodash';
import getModel from './objectModel';
// import { FormBuilder } from '@angular/forms';
export function guid(len: number) {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  let rtn = '';
  for (let index = 0; index < Math.ceil(len / 4); index++) {
    rtn = rtn + s4();
  }
  return rtn.slice(0, len);
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  filter = null;
  data = order;
  name='order'
//   objectKeysList: any;
//   objectGroupList: string[];
//   objectDisplay: any;
// objectModelList: any;
// objectKeyedList: any;
// modelRoot: any;
//   constructor(){
//     // rivate fb: FormBuilder) {
//     this.objectModelList = getModel(this.modelRootName,order);
//     this.objectKeyedList = groupBy(this.objectModelList,'key')
//     this.objectGroupList = groupBy(this.objectModelList,'parent')
//     this.modelRoot = this.objectGroupList[this.modelRootName]
//     console.log(JSON.stringify(this.objectModelList))
//   }
  
  // objectListSorted = this.objectKeysList.map(i=>{
  //   const [path,type] = (i.split('|'));
  //   const paths = path.split('.')
  //   return [paths.length,paths.slice(0,-1).join('.'),paths.slice(-1)[0]==='ᴵᵀᴱᴹ' ? paths.slice(-2)[0] :paths.slice(-1)[0],type]
  // });
  //   zipped = this.objectListSorted.map(i=>{
  //     const [path,type] = (i.split('|'));
  //     // return [path,type]
  //     const paths = path.split('.')
  //     // return [camelCase(path).replace(/ENTRY/g,'ᴵᵀᴱᴹ'),path.replace(/_E_N_T_R_Y_/g,'ᴵᵀᴱᴹ'),type]
  //     return {
  //       path: paths.length>1 ? paths.slice(0,-1).join('.'):'',
  //       type,
  //       name:  (
  //         type === 'array' ?
  //           paths.slice(-1)[0]
  //           :
  //           type === 'map' ?
  //             path

  //           :
  //           paths.slice(-1)[0]
  //       )
  //   }
  // })
  // const i.split('|')))
  //   {
  //     const paths = path.split('.')
  //     return { parent: paths.length>1 ? camelCase(paths.slice(0,-1).join(' ')):'', field: paths.slice(-1)[0],type}
  // })
}
// data= {
//   "actionCartToPayment": {
//     "_emitterID": "actionCartToPayment",
//     "emits": {
//       "data": {
//         "action": "cartPayment"
//       }
//     },
//     "group": "link",
//     "icon": "",
//     "label": "Action Cart To Payment",
//     "placeholder": "Add To Cart",
//     "styler": {
//       "backgroundImage": "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 0 24 24\" width=\"24px\" fill=\"%23000000\"%3E%3Cpath d=\"M 13 1 L 13 4 L 9 4 L 9 6 L 13 6 L 13 9 L 17 5 L 13 1 z M 5.4140625 1.9960938 L 2.0039062 2.0136719 L 2.0136719 4.0136719 L 4.0839844 4.0039062 L 7.3789062 11.908203 L 6.1816406 13.824219 C 5.7816406 14.464219 5.7609531 15.272641 6.1269531 15.931641 C 6.4929531 16.590641 7.1874063 17 7.9414062 17 L 20 17 L 20 15 L 7.9414062 15 L 7.8769531 14.882812 L 9.0527344 13 L 16.521484 13 C 17.248484 13 17.917531 12.606656 18.269531 11.972656 L 22.382812 4.5664062 L 20.634766 3.5957031 L 16.521484 11 L 9.1660156 11 L 5.4140625 1.9960938 z M 8 18 A 2 2 0 0 0 6 20 A 2 2 0 0 0 8 22 A 2 2 0 0 0 10 20 A 2 2 0 0 0 8 18 z M 18 18 A 2 2 0 0 0 16 20 A 2 2 0 0 0 18 22 A 2 2 0 0 0 20 20 A 2 2 0 0 0 18 18 Z\"%3E%3C/path%3E%3C/svg%3E')",
//       "backgroundPosition": "center",
//       "backgroundRepeat": "no-repeat",
//       "gridArea": "3 / 3 / span 1 / span 1",
//       "transform": "none"
//     },
//     "tags": [
//       "add",
//       "cart"
//     ],
//     "valu": {
//       "path": "data.action",
//       "show": "active",
//       "styler": {}
//     }
//   },
//   "addToCartSetup": {
//     "_emitterID": "addToCartSetup",
//     "action": "addToCartSetup",
//     "group": "link",
//     "icon": "add_shopping_cart",
//     "label": "Add To Cart",
//     "placeholder": "Add To Cart",
//     "styler": {
//       "gridArea": "3 / 2 / span 1 / span 1",
//       "transform": "none"
//     },
//     "tags": [
//       "add",
//       "cart"
//     ],
//     "valu": {
//       "path": "data.action",
//       "show": "active",
//       "styler": {}
//     }
//   },
//   "backgroundImage": {
//     "_emitterID": "backgroundImage",
//     "action": "uploadFile",
//     "group": "background",
//     "icon": "image",
//     "label": "Image",
//     "placeholder": "Image",
//     "styler": {
//       "gridArea": "1 / 2  / span 1 /span 1",
//       "transform": "none"
//     },
//     "tags": [
//       "image"
//     ],
//     "valu": {
//       "path": "styler.backgroundImage",
//       "show": "none",
//       "styler": {}
//     }
//   },
//   "backgroundPosition": {
//     "_emitterID": "backgroundPosition",
//     "group": "background",
//     "icon": "picture_in_picture",
//     "label": "Image Position",
//     "options": [
//       {
//         "emits": {
//           "styler": {
//             "backgroundPosition": "top left"
//           }
//         },
//         "label": "top left"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundPosition": "top center"
//           }
//         },
//         "label": "top center"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundPosition": "top right"
//           }
//         },
//         "label": "top right"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundPosition": "left center"
//           }
//         },
//         "label": "left center"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundPosition": "center"
//           }
//         },
//         "label": "center"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundPosition": "right center"
//           }
//         },
//         "label": "right center"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundPosition": "bottom left"
//           }
//         },
//         "label": "bottom left"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundPosition": "bottom center"
//           }
//         },
//         "label": "bottom center"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundPosition": "bottom right"
//           }
//         },
//         "label": "bottom right"
//       }
//     ],
//     "placeholder": "Image Position",
//     "styler": {
//       "gridArea": "4 / 2  / span 1 /span 1",
//       "transform": "none"
//     },
//     "tags": [
//       "image",
//       "position"
//     ],
//     "valu": {
//       "path": "styler.backgroundPosition",
//       "show": "value",
//       "styler": {}
//     }
//   },
//   "backgroundRepeat": {
//     "_emitterID": "backgroundRepeat",
//     "group": "background",
//     "icon": "repeat_on",
//     "label": "Image Repeat",
//     "options": [
//       {
//         "emits": {
//           "styler": {
//             "backgroundRepeat": "no-repeat"
//           }
//         },
//         "label": "no-repeat"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundRepeat": "repeat"
//           }
//         },
//         "label": "repeat"
//       }
//     ],
//     "placeholder": "Image Repeat",
//     "styler": {
//       "gridArea": "5 / 2  / span 1 /span 1",
//       "transform": "none"
//     },
//     "tags": [
//       "image",
//       "repeat"
//     ],
//     "valu": {
//       "path": "styler.backgroundRepeat",
//       "show": "value",
//       "styler": {}
//     }
//   },
//   "backgroundSize": {
//     "_emitterID": "backgroundSize",
//     "group": "background",
//     "icon": "photo_size_select_large",
//     "label": "Image Size",
//     "options": [
//       {
//         "emits": {
//           "styler": {
//             "backgroundSize": "cover"
//           }
//         },
//         "label": "cover"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundSize": "contain"
//           }
//         },
//         "label": "contain"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundSize": "10%"
//           }
//         },
//         "label": "10%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundSize": "20%"
//           }
//         },
//         "label": "20%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundSize": "30%"
//           }
//         },
//         "label": "30%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundSize": "33.34%"
//           }
//         },
//         "label": "33%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundSize": "40%"
//           }
//         },
//         "label": "40%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundSize": "50%"
//           }
//         },
//         "label": "50%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundSize": "60%"
//           }
//         },
//         "label": "60%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundSize": "70%"
//           }
//         },
//         "label": "70%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundSize": "80%"
//           }
//         },
//         "label": "80%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundSize": "90%"
//           }
//         },
//         "label": "90%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundSize": "100%"
//           }
//         },
//         "label": "100%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundSize": "200%"
//           }
//         },
//         "label": "200%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundSize": "50px"
//           }
//         },
//         "label": "50px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundSize": "80px"
//           }
//         },
//         "label": "80px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundSize": "130px"
//           }
//         },
//         "label": "130px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundSize": "280px"
//           }
//         },
//         "label": "280px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundSize": "450px"
//           }
//         },
//         "label": "450px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundSize": "600px"
//           }
//         },
//         "label": "600px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "backgroundSize": "750px"
//           }
//         },
//         "label": "750px"
//       }
//     ],
//     "placeholder": "Image Size",
//     "styler": {
//       "gridArea": "3 / 2 / span 1 /span 1",
//       "transform": "none"
//     },
//     "tags": [
//       "image",
//       "size"
//     ],
//     "valu": {
//       "path": "styler.backgroundSize",
//       "show": "value",
//       "styler": {}
//     }
//   },
//   "borderBottomLeftRadius": {
//     "_emitterID": "borderBottomLeftRadius",
//     "group": "border",
//     "icon": "rounded_corner",
//     "label": "Border Bottom Left Radius",
//     "options": [
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "0px"
//           }
//         },
//         "label": "0px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "4px"
//           }
//         },
//         "label": "4px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "8px"
//           }
//         },
//         "label": "8px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "12px"
//           }
//         },
//         "label": "12px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "16px"
//           }
//         },
//         "label": "16px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "20px"
//           }
//         },
//         "label": "20px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "24px"
//           }
//         },
//         "label": "24px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "32px"
//           }
//         },
//         "label": "32px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "40px"
//           }
//         },
//         "label": "40px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "48px"
//           }
//         },
//         "label": "48px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "56px"
//           }
//         },
//         "label": "56px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "64px"
//           }
//         },
//         "label": "64px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "72px"
//           }
//         },
//         "label": "72px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "80px"
//           }
//         },
//         "label": "80px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "88px"
//           }
//         },
//         "label": "88px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "96px"
//           }
//         },
//         "label": "96px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "10%"
//           }
//         },
//         "label": "10%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "25%"
//           }
//         },
//         "label": "25%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "50%"
//           }
//         },
//         "label": "50%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "10vmin"
//           }
//         },
//         "label": "10vmin"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "25vmin"
//           }
//         },
//         "label": "25vmin"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "50vmin"
//           }
//         },
//         "label": "50vmin"
//       }
//     ],
//     "placeholder": "Border Bottom Left Radius",
//     "styler": {
//       "gridArea": "6 / 1 / span 2 / span 2",
//       "transform": "rotate(180deg)"
//     },
//     "tags": [
//       "border",
//       "bottom",
//       "left",
//       "radius"
//     ],
//     "valu": {
//       "path": "styler.borderBottomLeftRadius",
//       "show": "value",
//       "styler": {}
//     }
//   },
//   "borderBottomRightRadius": {
//     "_emitterID": "borderBottomRightRadius",
//     "group": "border",
//     "icon": "rounded_corner",
//     "label": "Border Bottom Right Radius",
//     "options": [
//       {
//         "emits": {
//           "styler": {
//             "borderBottomRightRadius": "0px"
//           }
//         },
//         "label": "0px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomRightRadius": "4px"
//           }
//         },
//         "label": "4px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomRightRadius": "8px"
//           }
//         },
//         "label": "8px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomRightRadius": "12px"
//           }
//         },
//         "label": "12px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomRightRadius": "16px"
//           }
//         },
//         "label": "16px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomRightRadius": "20px"
//           }
//         },
//         "label": "20px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomRightRadius": "24px"
//           }
//         },
//         "label": "24px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomRightRadius": "32px"
//           }
//         },
//         "label": "32px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomRightRadius": "40px"
//           }
//         },
//         "label": "40px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomRightRadius": "48px"
//           }
//         },
//         "label": "48px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomRightRadius": "56px"
//           }
//         },
//         "label": "56px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomRightRadius": "64px"
//           }
//         },
//         "label": "64px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomRightRadius": "72px"
//           }
//         },
//         "label": "72px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomRightRadius": "80px"
//           }
//         },
//         "label": "80px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomRightRadius": "88px"
//           }
//         },
//         "label": "88px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomRightRadius": "96px"
//           }
//         },
//         "label": "96px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomRightRadius": "10%"
//           }
//         },
//         "label": "10%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomRightRadius": "25%"
//           }
//         },
//         "label": "25%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomRightRadius": "50%"
//           }
//         },
//         "label": "50%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomRightRadius": "10vmin"
//           }
//         },
//         "label": "10vmin"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomRightRadius": "25vmin"
//           }
//         },
//         "label": "25vmin"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomRightRadius": "50vmin"
//           }
//         },
//         "label": "50vmin"
//       }
//     ],
//     "placeholder": "Border Bottom Right Radius",
//     "styler": {
//       "gridArea": "6 / 4 / span 2 / span 2",
//       "transform": "rotate(90deg)"
//     },
//     "tags": [
//       "border",
//       "bottom",
//       "right",
//       "radius"
//     ],
//     "valu": {
//       "path": "styler.borderBottomRightRadius",
//       "show": "value",
//       "styler": {}
//     }
//   },
//   "borderBottomStyle": {
//     "_emitterID": "borderBottomStyle",
//     "group": "border",
//     "icon": "line_style",
//     "label": "Border Bottom Style",
//     "options": [
//       {
//         "emits": {
//           "styler": {
//             "borderBottomStyle": "solid"
//           }
//         },
//         "label": "solid"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomStyle": "dotted"
//           }
//         },
//         "label": "dotted"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomStyle": "dashed"
//           }
//         },
//         "label": "dashed"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomStyle": "double"
//           }
//         },
//         "label": "double"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomStyle": "inset"
//           }
//         },
//         "label": "inset"
//       }
//     ],
//     "placeholder": "Border Bottom Style",
//     "styler": {
//       "gridArea": "7 / 3 / 8 / 4",
//       "transform": "rotate(180deg)"
//     },
//     "tags": [
//       "border",
//       "bottom",
//       "style"
//     ],
//     "valu": {
//       "path": "styler.borderBottomStyle",
//       "show": "value",
//       "styler": {}
//     }
//   },
//   "borderBottomWidth": {
//     "_emitterID": "borderBottomWidth",
//     "group": "border",
//     "icon": "line_weight",
//     "label": "Border Bottom Width",
//     "options": [
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "0px"
//           }
//         },
//         "label": "0px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "1px"
//           }
//         },
//         "label": "1px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "2px"
//           }
//         },
//         "label": "2px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "3px"
//           }
//         },
//         "label": "3px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "4px"
//           }
//         },
//         "label": "4px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "5px"
//           }
//         },
//         "label": "5px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "8px"
//           }
//         },
//         "label": "8px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "12px"
//           }
//         },
//         "label": "12px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "16px"
//           }
//         },
//         "label": "16px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "20px"
//           }
//         },
//         "label": "20px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "40px"
//           }
//         },
//         "label": "40px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "60px"
//           }
//         },
//         "label": "60px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "80px"
//           }
//         },
//         "label": "80px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "10%"
//           }
//         },
//         "label": "10%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "20%"
//           }
//         },
//         "label": "20%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "25%"
//           }
//         },
//         "label": "25%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "30%"
//           }
//         },
//         "label": "30%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "40%"
//           }
//         },
//         "label": "40%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "50%"
//           }
//         },
//         "label": "50%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "60%"
//           }
//         },
//         "label": "60%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "70%"
//           }
//         },
//         "label": "70%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "75%"
//           }
//         },
//         "label": "75%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "80%"
//           }
//         },
//         "label": "80%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "90%"
//           }
//         },
//         "label": "90%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "100%"
//           }
//         },
//         "label": "100%"
//       }
//     ],
//     "placeholder": "Border Bottom Width",
//     "styler": {
//       "gridArea": "6 / 3 / 7 / 4",
//       "transform": "rotate(180deg)"
//     },
//     "tags": [
//       "border",
//       "bottom",
//       "width"
//     ],
//     "valu": {
//       "path": "styler.borderBottomWidth",
//       "show": "value",
//       "styler": {}
//     }
//   },
//   "borderLeftStyle": {
//     "_emitterID": "borderLeftStyle",
//     "group": "border",
//     "icon": "line_style",
//     "label": "Border Left Style",
//     "options": [
//       {
//         "emits": {
//           "styler": {
//             "borderLeftStyle": "solid"
//           }
//         },
//         "label": "solid"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderLeftStyle": "dotted"
//           }
//         },
//         "label": "dotted"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderLeftStyle": "dashed"
//           }
//         },
//         "label": "dashed"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderLeftStyle": "double"
//           }
//         },
//         "label": "double"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderLeftStyle": "inset"
//           }
//         },
//         "label": "inset"
//       }
//     ],
//     "placeholder": "Border Left Style",
//     "styler": {
//       "gridArea": "5 / 1 / span 2 / span 1",
//       "transform": "rotate(90deg)"
//     },
//     "tags": [
//       "border",
//       "left",
//       "style"
//     ],
//     "valu": {
//       "path": "styler.borderLeftStyle",
//       "show": "value",
//       "styler": {}
//     }
//   },
//   "borderLeftWidth": {
//     "_emitterID": "borderLeftWidth",
//     "group": "border",
//     "icon": "line_weight",
//     "label": "Border Left Width",
//     "options": [
//       {
//         "emits": {
//           "styler": {
//             "borderLeftWidth": "0px"
//           }
//         },
//         "label": "0px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderLeftWidth": "1px"
//           }
//         },
//         "label": "1px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderLeftWidth": "2px"
//           }
//         },
//         "label": "2px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderLeftWidth": "3px"
//           }
//         },
//         "label": "3px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderLeftWidth": "4px"
//           }
//         },
//         "label": "4px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderLeftWidth": "5px"
//           }
//         },
//         "label": "5px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderLeftWidth": "8px"
//           }
//         },
//         "label": "8px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderLeftWidth": "12px"
//           }
//         },
//         "label": "12px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderLeftWidth": "16px"
//           }
//         },
//         "label": "16px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderLeftWidth": "20px"
//           }
//         },
//         "label": "20px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderLeftWidth": "40px"
//           }
//         },
//         "label": "40px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderLeftWidth": "60px"
//           }
//         },
//         "label": "60px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderLeftWidth": "80px"
//           }
//         },
//         "label": "80px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderLeftWidth": "10%"
//           }
//         },
//         "label": "10%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderLeftWidth": "20%"
//           }
//         },
//         "label": "20%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderLeftWidth": "25%"
//           }
//         },
//         "label": "25%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderLeftWidth": "30%"
//           }
//         },
//         "label": "30%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderLeftWidth": "40%"
//           }
//         },
//         "label": "40%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderLeftWidth": "50%"
//           }
//         },
//         "label": "50%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderLeftWidth": "60%"
//           }
//         },
//         "label": "60%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderLeftWidth": "70%"
//           }
//         },
//         "label": "70%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderLeftWidth": "75%"
//           }
//         },
//         "label": "75%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderLeftWidth": "80%"
//           }
//         },
//         "label": "80%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderLeftWidth": "90%"
//           }
//         },
//         "label": "90%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderLeftWidth": "100%"
//           }
//         },
//         "label": "100%"
//       }
//     ],
//     "placeholder": "Border Left Width",
//     "styler": {
//       "gridArea": "5 / 2 / span 2 / span 1",
//       "transform": "rotate(90deg)"
//     },
//     "tags": [
//       "border",
//       "left",
//       "width"
//     ],
//     "valu": {
//       "path": "styler.borderLeftWidth",
//       "show": "value",
//       "styler": {}
//     }
//   },
//   "borderRadius": {
//     "_emitterID": "borderRadius",
//     "group": "border",
//     "icon": "rounded_corners",
//     "label": "Border Radius",
//     "options": [
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "0px",
//             "borderBottomRightRadius": "0px",
//             "borderTopLeftRadius": "0px",
//             "borderTopRightRadius": "0px"
//           }
//         },
//         "label": "0px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "4px",
//             "borderBottomRightRadius": "4px",
//             "borderTopLeftRadius": "4px",
//             "borderTopRightRadius": "4px"
//           }
//         },
//         "label": "4px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "8px",
//             "borderBottomRightRadius": "8px",
//             "borderTopLeftRadius": "8px",
//             "borderTopRightRadius": "8px"
//           }
//         },
//         "label": "8px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "12px",
//             "borderBottomRightRadius": "12px",
//             "borderTopLeftRadius": "12px",
//             "borderTopRightRadius": "12px"
//           }
//         },
//         "label": "12px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "16px",
//             "borderBottomRightRadius": "16px",
//             "borderTopLeftRadius": "16px",
//             "borderTopRightRadius": "16px"
//           }
//         },
//         "label": "16px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "20px",
//             "borderBottomRightRadius": "20px",
//             "borderTopLeftRadius": "20px",
//             "borderTopRightRadius": "20px"
//           }
//         },
//         "label": "20px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "24px",
//             "borderBottomRightRadius": "24px",
//             "borderTopLeftRadius": "24px",
//             "borderTopRightRadius": "24px"
//           }
//         },
//         "label": "24px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "32px",
//             "borderBottomRightRadius": "32px",
//             "borderTopLeftRadius": "32px",
//             "borderTopRightRadius": "32px"
//           }
//         },
//         "label": "32px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "40px",
//             "borderBottomRightRadius": "40px",
//             "borderTopLeftRadius": "40px",
//             "borderTopRightRadius": "40px"
//           }
//         },
//         "label": "40px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "48px",
//             "borderBottomRightRadius": "48px",
//             "borderTopLeftRadius": "48px",
//             "borderTopRightRadius": "48px"
//           }
//         },
//         "label": "48px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "56px",
//             "borderBottomRightRadius": "56px",
//             "borderTopLeftRadius": "56px",
//             "borderTopRightRadius": "56px"
//           }
//         },
//         "label": "56px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "64px",
//             "borderBottomRightRadius": "64px",
//             "borderTopLeftRadius": "64px",
//             "borderTopRightRadius": "64px"
//           }
//         },
//         "label": "64px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "72px",
//             "borderBottomRightRadius": "72px",
//             "borderTopLeftRadius": "72px",
//             "borderTopRightRadius": "72px"
//           }
//         },
//         "label": "72px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "80px",
//             "borderBottomRightRadius": "80px",
//             "borderTopLeftRadius": "80px",
//             "borderTopRightRadius": "80px"
//           }
//         },
//         "label": "80px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "88px",
//             "borderBottomRightRadius": "88px",
//             "borderTopLeftRadius": "88px",
//             "borderTopRightRadius": "88px"
//           }
//         },
//         "label": "88px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "96px",
//             "borderBottomRightRadius": "96px",
//             "borderTopLeftRadius": "96px",
//             "borderTopRightRadius": "96px"
//           }
//         },
//         "label": "96px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "10%",
//             "borderBottomRightRadius": "10%",
//             "borderTopLeftRadius": "10%",
//             "borderTopRightRadius": "10%"
//           }
//         },
//         "label": "10%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "25%",
//             "borderBottomRightRadius": "25%",
//             "borderTopLeftRadius": "25%",
//             "borderTopRightRadius": "25%"
//           }
//         },
//         "label": "25%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "50%",
//             "borderBottomRightRadius": "50%",
//             "borderTopLeftRadius": "50%",
//             "borderTopRightRadius": "50%"
//           }
//         },
//         "label": "50%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "10vmin",
//             "borderBottomRightRadius": "10vmin",
//             "borderTopLeftRadius": "10vmin",
//             "borderTopRightRadius": "10vmin"
//           }
//         },
//         "label": "10vmin"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "25vmin",
//             "borderBottomRightRadius": "25vmin",
//             "borderTopLeftRadius": "25vmin",
//             "borderTopRightRadius": "25vmin"
//           }
//         },
//         "label": "25vmin"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomLeftRadius": "50vmin",
//             "borderBottomRightRadius": "50vmin",
//             "borderTopLeftRadius": "50vmin",
//             "borderTopRightRadius": "50vmin"
//           }
//         },
//         "label": "50vmin"
//       }
//     ],
//     "placeholder": "Border Radius",
//     "styler": {
//       "gridArea": "1 / 4 / 2 / 5",
//       "transform": "none"
//     },
//     "tags": [
//       "border",
//       "radius"
//     ]
//   },
//   "borderRightStyle": {
//     "_emitterID": "borderRightStyle",
//     "group": "border",
//     "icon": "line_style",
//     "label": "Border Right Style",
//     "options": [
//       {
//         "emits": {
//           "styler": {
//             "borderRightStyle": "solid"
//           }
//         },
//         "label": "solid"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderRightStyle": "dotted"
//           }
//         },
//         "label": "dotted"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderRightStyle": "dashed"
//           }
//         },
//         "label": "dashed"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderRightStyle": "double"
//           }
//         },
//         "label": "double"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderRightStyle": "inset"
//           }
//         },
//         "label": "inset"
//       }
//     ],
//     "placeholder": "Border Right Style",
//     "styler": {
//       "gridArea": "5 / 5 / span 2 / span 1",
//       "transform": "rotate(270deg)"
//     },
//     "tags": [
//       "border",
//       "right",
//       "style"
//     ],
//     "valu": {
//       "path": "styler.borderRightStyle",
//       "show": "value",
//       "styler": {}
//     }
//   },
//   "borderRightWidth": {
//     "_emitterID": "borderRightWidth",
//     "group": "border",
//     "icon": "line_weight",
//     "label": "Border Right Width",
//     "options": [
//       {
//         "emits": {
//           "styler": {
//             "borderRightWidth": "0px"
//           }
//         },
//         "label": "0px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderRightWidth": "1px"
//           }
//         },
//         "label": "1px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderRightWidth": "2px"
//           }
//         },
//         "label": "2px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderRightWidth": "3px"
//           }
//         },
//         "label": "3px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderRightWidth": "4px"
//           }
//         },
//         "label": "4px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderRightWidth": "5px"
//           }
//         },
//         "label": "5px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderRightWidth": "8px"
//           }
//         },
//         "label": "8px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderRightWidth": "12px"
//           }
//         },
//         "label": "12px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderRightWidth": "16px"
//           }
//         },
//         "label": "16px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderRightWidth": "20px"
//           }
//         },
//         "label": "20px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderRightWidth": "40px"
//           }
//         },
//         "label": "40px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderRightWidth": "60px"
//           }
//         },
//         "label": "60px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderRightWidth": "80px"
//           }
//         },
//         "label": "80px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderRightWidth": "10%"
//           }
//         },
//         "label": "10%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderRightWidth": "20%"
//           }
//         },
//         "label": "20%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderRightWidth": "25%"
//           }
//         },
//         "label": "25%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderRightWidth": "30%"
//           }
//         },
//         "label": "30%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderRightWidth": "40%"
//           }
//         },
//         "label": "40%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderRightWidth": "50%"
//           }
//         },
//         "label": "50%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderRightWidth": "60%"
//           }
//         },
//         "label": "60%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderRightWidth": "70%"
//           }
//         },
//         "label": "70%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderRightWidth": "75%"
//           }
//         },
//         "label": "75%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderRightWidth": "80%"
//           }
//         },
//         "label": "80%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderRightWidth": "90%"
//           }
//         },
//         "label": "90%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderRightWidth": "100%"
//           }
//         },
//         "label": "100%"
//       }
//     ],
//     "placeholder": "Border Right Width",
//     "styler": {
//       "gridArea": "5/4 / span 2 / span 1",
//       "transform": "rotate(270deg)"
//     },
//     "tags": [
//       "border",
//       "right",
//       "width"
//     ],
//     "valu": {
//       "path": "styler.borderRightWidth",
//       "show": "value",
//       "styler": {}
//     }
//   },
//   "borderStyle": {
//     "_emitterID": "borderStyle",
//     "group": "border",
//     "icon": "border_style",
//     "label": "Border Style",
//     "options": [
//       {
//         "emits": {
//           "styler": {
//             "borderBottomStyle": "solid",
//             "borderLeftStyle": "solid",
//             "borderRightStyle": "solid",
//             "borderTopStyle": "solid"
//           }
//         },
//         "label": "solid"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomStyle": "dotted",
//             "borderLeftStyle": "dotted",
//             "borderRightStyle": "dotted",
//             "borderTopStyle": "dotted"
//           }
//         },
//         "label": "dotted"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomStyle": "dashed",
//             "borderLeftStyle": "dashed",
//             "borderRightStyle": "dashed",
//             "borderTopStyle": "dashed"
//           }
//         },
//         "label": "dashed"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomStyle": "double",
//             "borderLeftStyle": "double",
//             "borderRightStyle": "double",
//             "borderTopStyle": "double"
//           }
//         },
//         "label": "double"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomStyle": "inset",
//             "borderLeftStyle": "inset",
//             "borderRightStyle": "inset",
//             "borderTopStyle": "inset"
//           }
//         },
//         "label": "inset"
//       }
//     ],
//     "placeholder": "Border Style",
//     "styler": {
//       "gridArea": "1 / 3  / span 1 / span 1",
//       "transform": "none"
//     },
//     "tags": [
//       "border",
//       "style"
//     ]
//   },
//   "borderTopLeftRadius": {
//     "_emitterID": "borderTopLeftRadius",
//     "group": "border",
//     "icon": "rounded_corner",
//     "label": "Border Top Left Radius",
//     "options": [
//       {
//         "emits": {
//           "styler": {
//             "borderTopLeftRadius": "0px"
//           }
//         },
//         "label": "0px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopLeftRadius": "4px"
//           }
//         },
//         "label": "4px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopLeftRadius": "8px"
//           }
//         },
//         "label": "8px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopLeftRadius": "12px"
//           }
//         },
//         "label": "12px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopLeftRadius": "16px"
//           }
//         },
//         "label": "16px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopLeftRadius": "20px"
//           }
//         },
//         "label": "20px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopLeftRadius": "24px"
//           }
//         },
//         "label": "24px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopLeftRadius": "32px"
//           }
//         },
//         "label": "32px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopLeftRadius": "40px"
//           }
//         },
//         "label": "40px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopLeftRadius": "48px"
//           }
//         },
//         "label": "48px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopLeftRadius": "56px"
//           }
//         },
//         "label": "56px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopLeftRadius": "64px"
//           }
//         },
//         "label": "64px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopLeftRadius": "72px"
//           }
//         },
//         "label": "72px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopLeftRadius": "80px"
//           }
//         },
//         "label": "80px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopLeftRadius": "88px"
//           }
//         },
//         "label": "88px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopLeftRadius": "96px"
//           }
//         },
//         "label": "96px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopLeftRadius": "10%"
//           }
//         },
//         "label": "10%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopLeftRadius": "25%"
//           }
//         },
//         "label": "25%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopLeftRadius": "50%"
//           }
//         },
//         "label": "50%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopLeftRadius": "10vmin"
//           }
//         },
//         "label": "10vmin"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopLeftRadius": "25vmin"
//           }
//         },
//         "label": "25vmin"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopLeftRadius": "50vmin"
//           }
//         },
//         "label": "50vmin"
//       }
//     ],
//     "placeholder": "Border Top Left Radius",
//     "styler": {
//       "gridArea": "4 / 1 / span 2 / span 2",
//       "transform": "rotate(-90deg)"
//     },
//     "tags": [
//       "border",
//       "top",
//       "left",
//       "radius"
//     ],
//     "valu": {
//       "path": "styler.borderTopLeftRadius",
//       "show": "value",
//       "styler": {}
//     }
//   },
//   "borderTopRightRadius": {
//     "_emitterID": "borderTopRightRadius",
//     "group": "border",
//     "icon": "rounded_corner",
//     "label": "Border Top Right Radius",
//     "options": [
//       {
//         "emits": {
//           "styler": {
//             "borderTopRightRadius": "0px"
//           }
//         },
//         "label": "0px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopRightRadius": "4px"
//           }
//         },
//         "label": "4px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopRightRadius": "8px"
//           }
//         },
//         "label": "8px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopRightRadius": "12px"
//           }
//         },
//         "label": "12px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopRightRadius": "16px"
//           }
//         },
//         "label": "16px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopRightRadius": "20px"
//           }
//         },
//         "label": "20px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopRightRadius": "24px"
//           }
//         },
//         "label": "24px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopRightRadius": "32px"
//           }
//         },
//         "label": "32px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopRightRadius": "40px"
//           }
//         },
//         "label": "40px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopRightRadius": "48px"
//           }
//         },
//         "label": "48px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopRightRadius": "56px"
//           }
//         },
//         "label": "56px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopRightRadius": "64px"
//           }
//         },
//         "label": "64px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopRightRadius": "72px"
//           }
//         },
//         "label": "72px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopRightRadius": "80px"
//           }
//         },
//         "label": "80px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopRightRadius": "88px"
//           }
//         },
//         "label": "88px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopRightRadius": "96px"
//           }
//         },
//         "label": "96px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopRightRadius": "10%"
//           }
//         },
//         "label": "10%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopRightRadius": "25%"
//           }
//         },
//         "label": "25%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopRightRadius": "50%"
//           }
//         },
//         "label": "50%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopRightRadius": "10vmin"
//           }
//         },
//         "label": "10vmin"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopRightRadius": "25vmin"
//           }
//         },
//         "label": "25vmin"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopRightRadius": "50vmin"
//           }
//         },
//         "label": "50vmin"
//       }
//     ],
//     "placeholder": "Border Top Right Radius",
//     "styler": {
//       "gridArea": "4 / 4 / span 2 / span 2",
//       "transform": "none"
//     },
//     "tags": [
//       "border",
//       "top",
//       "right",
//       "radius"
//     ],
//     "valu": {
//       "path": "styler.borderTopRightRadius",
//       "show": "value",
//       "styler": {}
//     }
//   },
//   "borderTopStyle": {
//     "_emitterID": "borderTopStyle",
//     "group": "border",
//     "icon": "line_style",
//     "label": "Border Top Style",
//     "options": [
//       {
//         "emits": {
//           "styler": {
//             "borderTopStyle": "solid"
//           }
//         },
//         "label": "solid"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopStyle": "dotted"
//           }
//         },
//         "label": "dotted"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopStyle": "dashed"
//           }
//         },
//         "label": "dashed"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopStyle": "double"
//           }
//         },
//         "label": "double"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopStyle": "inset"
//           }
//         },
//         "label": "inset"
//       }
//     ],
//     "placeholder": "Border Top Style",
//     "styler": {
//       "gridArea": "4/3 / span 1 / span 1",
//       "transform": "none"
//     },
//     "tags": [
//       "border",
//       "top",
//       "style"
//     ],
//     "valu": {
//       "path": "styler.borderTopStyle",
//       "show": "value",
//       "styler": {}
//     }
//   },
//   "borderTopWidth": {
//     "_emitterID": "borderTopWidth",
//     "group": "border",
//     "icon": "line_weight",
//     "label": "Border Top Width",
//     "options": [
//       {
//         "emits": {
//           "styler": {
//             "borderTopWidth": "0px"
//           }
//         },
//         "label": "0px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopWidth": "1px"
//           }
//         },
//         "label": "1px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopWidth": "2px"
//           }
//         },
//         "label": "2px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopWidth": "3px"
//           }
//         },
//         "label": "3px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopWidth": "4px"
//           }
//         },
//         "label": "4px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopWidth": "5px"
//           }
//         },
//         "label": "5px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopWidth": "8px"
//           }
//         },
//         "label": "8px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopWidth": "12px"
//           }
//         },
//         "label": "12px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopWidth": "16px"
//           }
//         },
//         "label": "16px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopWidth": "20px"
//           }
//         },
//         "label": "20px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopWidth": "40px"
//           }
//         },
//         "label": "40px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopWidth": "60px"
//           }
//         },
//         "label": "60px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopWidth": "80px"
//           }
//         },
//         "label": "80px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopWidth": "10%"
//           }
//         },
//         "label": "10%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopWidth": "20%"
//           }
//         },
//         "label": "20%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopWidth": "25%"
//           }
//         },
//         "label": "25%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopWidth": "30%"
//           }
//         },
//         "label": "30%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopWidth": "40%"
//           }
//         },
//         "label": "40%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopWidth": "50%"
//           }
//         },
//         "label": "50%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopWidth": "60%"
//           }
//         },
//         "label": "60%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopWidth": "70%"
//           }
//         },
//         "label": "70%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopWidth": "75%"
//           }
//         },
//         "label": "75%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopWidth": "80%"
//           }
//         },
//         "label": "80%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopWidth": "90%"
//           }
//         },
//         "label": "90%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderTopWidth": "100%"
//           }
//         },
//         "label": "100%"
//       }
//     ],
//     "placeholder": "Border Top Width",
//     "styler": {
//       "gridArea": "5/3 / span 1 / span 1",
//       "transform": "none"
//     },
//     "tags": [
//       "border",
//       "top",
//       "width"
//     ],
//     "valu": {
//       "path": "styler.borderTopWidth",
//       "show": "value",
//       "styler": {}
//     }
//   },
//   "borderWidth": {
//     "_emitterID": "borderWidth",
//     "group": "border",
//     "icon": "line_weight",
//     "label": "Border Width",
//     "options": [
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "0px",
//             "borderLeftWidth": "0px",
//             "borderRightWidth": "0px",
//             "borderTopWidth": "0px"
//           }
//         },
//         "label": "0px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "1px",
//             "borderLeftWidth": "1px",
//             "borderRightWidth": "1px",
//             "borderTopWidth": "1px"
//           }
//         },
//         "label": "1px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "2px",
//             "borderLeftWidth": "2px",
//             "borderRightWidth": "2px",
//             "borderTopWidth": "2px"
//           }
//         },
//         "label": "2px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "3px",
//             "borderLeftWidth": "3px",
//             "borderRightWidth": "3px",
//             "borderTopWidth": "3px"
//           }
//         },
//         "label": "3px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "4px",
//             "borderLeftWidth": "4px",
//             "borderRightWidth": "4px",
//             "borderTopWidth": "4px"
//           }
//         },
//         "label": "4px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "5px",
//             "borderLeftWidth": "5px",
//             "borderRightWidth": "5px",
//             "borderTopWidth": "5px"
//           }
//         },
//         "label": "5px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "8px",
//             "borderLeftWidth": "8px",
//             "borderRightWidth": "8px",
//             "borderTopWidth": "8px"
//           }
//         },
//         "label": "8px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "12px",
//             "borderLeftWidth": "12px",
//             "borderRightWidth": "12px",
//             "borderTopWidth": "12px"
//           }
//         },
//         "label": "12px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "16px",
//             "borderLeftWidth": "16px",
//             "borderRightWidth": "16px",
//             "borderTopWidth": "16px"
//           }
//         },
//         "label": "16px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "20px",
//             "borderLeftWidth": "20px",
//             "borderRightWidth": "20px",
//             "borderTopWidth": "20px"
//           }
//         },
//         "label": "20px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "40px",
//             "borderLeftWidth": "40px",
//             "borderRightWidth": "40px",
//             "borderTopWidth": "40px"
//           }
//         },
//         "label": "40px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "60px",
//             "borderLeftWidth": "60px",
//             "borderRightWidth": "60px",
//             "borderTopWidth": "60px"
//           }
//         },
//         "label": "60px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "80px",
//             "borderLeftWidth": "80px",
//             "borderRightWidth": "80px",
//             "borderTopWidth": "80px"
//           }
//         },
//         "label": "80px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "10%",
//             "borderLeftWidth": "10%",
//             "borderRightWidth": "10%",
//             "borderTopWidth": "10%"
//           }
//         },
//         "label": "10%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "20%",
//             "borderLeftWidth": "20%",
//             "borderRightWidth": "20%",
//             "borderTopWidth": "20%"
//           }
//         },
//         "label": "20%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "25%",
//             "borderLeftWidth": "25%",
//             "borderRightWidth": "25%",
//             "borderTopWidth": "25%"
//           }
//         },
//         "label": "25%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "30%",
//             "borderLeftWidth": "30%",
//             "borderRightWidth": "30%",
//             "borderTopWidth": "30%"
//           }
//         },
//         "label": "30%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "40%",
//             "borderLeftWidth": "40%",
//             "borderRightWidth": "40%",
//             "borderTopWidth": "40%"
//           }
//         },
//         "label": "40%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "50%",
//             "borderLeftWidth": "50%",
//             "borderRightWidth": "50%",
//             "borderTopWidth": "50%"
//           }
//         },
//         "label": "50%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "60%",
//             "borderLeftWidth": "60%",
//             "borderRightWidth": "60%",
//             "borderTopWidth": "60%"
//           }
//         },
//         "label": "60%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "70%",
//             "borderLeftWidth": "70%",
//             "borderRightWidth": "70%",
//             "borderTopWidth": "70%"
//           }
//         },
//         "label": "70%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "75%",
//             "borderLeftWidth": "75%",
//             "borderRightWidth": "75%",
//             "borderTopWidth": "75%"
//           }
//         },
//         "label": "75%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "80%",
//             "borderLeftWidth": "80%",
//             "borderRightWidth": "80%",
//             "borderTopWidth": "80%"
//           }
//         },
//         "label": "80%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "90%",
//             "borderLeftWidth": "90%",
//             "borderRightWidth": "90%",
//             "borderTopWidth": "90%"
//           }
//         },
//         "label": "90%"
//       },
//       {
//         "emits": {
//           "styler": {
//             "borderBottomWidth": "100%",
//             "borderLeftWidth": "100%",
//             "borderRightWidth": "100%",
//             "borderTopWidth": "100%"
//           }
//         },
//         "label": "100%"
//       }
//     ],
//     "placeholder": "Border Width",
//     "styler": {
//       "gridArea": "1/2 / span 1 / span 1",
//       "transform": "none"
//     },
//     "tags": [
//       "border",
//       "width"
//     ]
//   },
//   "boxShadow": {
//     "_emitterID": "boxShadow",
//     "group": "border",
//     "icon": "blur_on",
//     "label": "Box Shadow",
//     "options": [
//       {
//         "emits": {
//           "styler": {
//             "boxShadow": "none"
//           }
//         },
//         "label": "None"
//       },
//       {
//         "emits": {
//           "styler": {
//             "boxShadow": "0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12), 0 1px 3px 0 rgba(0, 0, 0, .20)"
//           }
//         },
//         "label": "Dark 1px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "boxShadow": "0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .12), 0 1px 5px 0 rgba(0, 0, 0, .20)"
//           }
//         },
//         "label": "Dark 2px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "boxShadow": "0 3px 4px 0 rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .12), 0 1px 8px 0 rgba(0, 0, 0, .20)"
//           }
//         },
//         "label": "Dark 3px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "boxShadow": "0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .20)"
//           }
//         },
//         "label": "Dark 4px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "boxShadow": "0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12), 0 3px 5px -1px rgba(0, 0, 0, .20)"
//           }
//         },
//         "label": "Dark 6px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "boxShadow": "0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12), 0 5px 5px -3px rgba(0, 0, 0, .20)"
//           }
//         },
//         "label": "Dark 8px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "boxShadow": "0 9px 12px 1px rgba(0, 0, 0, .14), 0 3px 16px 2px rgba(0, 0, 0, .12), 0 5px 6px -3px rgba(0, 0, 0, .20)"
//           }
//         },
//         "label": "Dark 9px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "boxShadow": "0 12px 17px 2px rgba(0, 0, 0, .14), 0 5px 22px 4px rgba(0, 0, 0, .12), 0 7px 8px -4px rgba(0, 0, 0, .20)"
//           }
//         },
//         "label": "Dark 12px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "boxShadow": "0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .20)"
//           }
//         },
//         "label": "Dark 16px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "boxShadow": "0 24px 38px 3px rgba(0, 0, 0, .14), 0 9px 46px 8px rgba(0, 0, 0, .12), 0 11px 15px -7px rgba(0, 0, 0, .20)"
//           }
//         },
//         "label": "Dark 24px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "boxShadow": "0 1px 1px 0 rgba(255,255,255, .14), 0 2px 1px -1px rgba(255,255,255, .12), 0 1px 3px 0 rgba(255,255,255, .20)"
//           }
//         },
//         "label": "Light 1px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "boxShadow": "0 2px 2px 0 rgba(255,255,255, .14), 0 3px 1px -2px rgba(255,255,255, .12), 0 1px 5px 0 rgba(255,255,255, .20)"
//           }
//         },
//         "label": "Light 2px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "boxShadow": "0 3px 4px 0 rgba(255,255,255, .14), 0 3px 3px -2px rgba(255,255,255, .12), 0 1px 8px 0 rgba(255,255,255, .20)"
//           }
//         },
//         "label": "Light 3px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "boxShadow": "0 4px 5px 0 rgba(255,255,255, .14), 0 1px 10px 0 rgba(255,255,255, .12), 0 2px 4px -1px rgba(255,255,255, .20)"
//           }
//         },
//         "label": "Light 4px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "boxShadow": "0 6px 10px 0 rgba(255,255,255, .14), 0 1px 18px 0 rgba(255,255,255, .12), 0 3px 5px -1px rgba(255,255,255, .20)"
//           }
//         },
//         "label": "Light 6px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "boxShadow": "0 8px 10px 1px rgba(255,255,255, .14), 0 3px 14px 2px rgba(255,255,255, .12), 0 5px 5px -3px rgba(255,255,255, .20)"
//           }
//         },
//         "label": "Light 8px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "boxShadow": "0 9px 12px 1px rgba(255,255,255, .14), 0 3px 16px 2px rgba(255,255,255, .12), 0 5px 6px -3px rgba(255,255,255, .20)"
//           }
//         },
//         "label": "Light 9px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "boxShadow": "0 12px 17px 2px rgba(255,255,255, .14), 0 5px 22px 4px rgba(255,255,255, .12), 0 7px 8px -4px rgba(255,255,255, .20)"
//           }
//         },
//         "label": "Light 12px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "boxShadow": "0 16px 24px 2px rgba(255,255,255, .14), 0 6px 30px 5px rgba(255,255,255, .12), 0 8px 10px -5px rgba(255,255,255, .20)"
//           }
//         },
//         "label": "Light 16px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "boxShadow": "0 24px 38px 3px rgba(255,255,255, .14), 0 9px 46px 8px rgba(255,255,255, .12), 0 11px 15px -7px rgba(255,255,255, .20)"
//           }
//         },
//         "label": "Light 24px"
//       },
//       {
//         "emits": {
//           "styler": {
//             "boxShadow": "0px 0px 1px rgba(255,255,255, .8),   0px 0px 2px rgba(255,255,255, .5),   0px 0px 3px rgba(255,255,255, .2),   0px 0px 1px rgba(224, 16, 116, 0.2),   0px 0px 2px rgba(224, 16, 116, 0.2),   0px 0px 3px rgba(224, 16, 116, 0.2),   0px 0px 4px rgba(224, 16, 116, 0.8),   0px 0px 6px rgba(224, 16, 116, 0.6),   0px 0px 8px rgba(224, 16, 116, 0.4),   0px 0px 16px rgba(224, 16, 116, 0.2),   0px 0px 20px 4px rgba(224, 16, 116, 0.2), inset  0px 0px 1px rgba(255,255,255, .8), inset 0px 0px 2px rgba(255,255,255, .5), inset 0px 0px 3px rgba(255,255,255, .2), inset 0px 0px 1px rgba(224, 16, 116, 0.2), inset 0px 0px 2px rgba(224, 16, 116, 0.2), inset 0px 0px 3px rgba(224, 16, 116, 0.2), inset 0px 0px 4px rgba(224, 16, 116, 0.8), inset 0px 0px 6px rgba(224, 16, 116, 0.6), inset  0px 0px 8px rgba(224, 16, 116, 0.4), inset 0px 0px 16px rgba(224, 16, 116, 0.2), inset 0px 0px 20px 4px rgba(224, 16, 116, 0.2)"
//           }
//         },
//         "label": "Neon Pink"
//       },
//       {
//         "emits": {
//           "styler": {
//             "boxShadow": "   0px 0px 1px rgba(255,255,255, .8),   0px 0px 2px rgba(255,255,255, .5),   0px 0px 3px rgba(255,255,255, .2),   0px 0px 1px rgba(255,255,38, 0.2),   0px 0px 2px rgba(255,255,38, 0.2),   0px 0px 3px rgba(255,255,38, 0.2),   0px 0px 4px rgba(255,255,38, 0.8),   0px 0px 6px rgba(255,255,38, 0.6),   0px 0px 8px rgba(255,255,38, 0.4),   0px 0px 16px rgba(255,255,38, 0.2),   0px 0px 20px 4px rgba(255,255,38, 0.2), inset  0px 0px 1px rgba(255,255,255, .8), inset 0px 0px 2px rgba(255,255,255, .5), inset 0px 0px 3px rgba(255,255,255, .2), inset 0px 0px 1px rgba(255,255,38, 0.2), inset 0px 0px 2px rgba(255,255,38, 0.2), inset 0px 0px 3px rgba(255,255,38, 0.2), inset 0px 0px 4px rgba(255,255,38, 0.8), inset 0px 0px 6px rgba(255,255,38, 0.6), inset  0px 0px 8px rgba(255,255,38, 0.4), inset 0px 0px 16px rgba(255,255,38, 0.2), inset 0px 0px 20px 4px rgba(255,255,38, 0.2)"
//           }
//         },
//         "label": "Neon Yellow"
//       }
//     ],
//     "placeholder": "Box Shadow",
//     "styler": {
//       "gridArea": "2/3 / span 1 / span 1",
//       "transform": "none"
//     },
//     "tags": [
//       "box",
//       "shadow"
//     ]
//   },
//   "clearBackColor": {
//     "_emitterID": "clearBackColor",
//     "emits": {
//       "styler": {
//         "backgroundColor": "unset"
//       }
//     },
//     "group": "clear",
//     "icon": "format_color_reset",
//     "label": "Clear Back Color",
//     "placeholder": "Clear Back Color",
//     "styler": {
//       "transform": "none"
//     },
//     "tags": [
//       "clear",
//       "back",
//       "color"
//     ]
//   },
//   "clearForeColor": {
//     "_emitterID": "clearForeColor",
//     "emits": {
//       "styler": {
//         "color": "unset"
//       }
//     },
//     "group": "clear",
//     "icon": "edit_off",
//     "label": "Clear Fore Color",
//     "placeholder": "Clear Fore Color",
//     "styler": {
//       "transform": "none"
//     },
//     "tags": [
//       "clear",
//       "fore",
//       "color"
//     ]
//   },
//   "clearImage": {
//     "_emitterID": "clearImage",
//     "emits": {
//       "styler": {
//         "backgroundImage": "none"
//       }
//     },
//     "group": "background",
//     "icon": "hide_image",
//     "label": "Image",
//     "placeholder": "Image",
//     "styler": {
//       "gridArea": "6 / 2  / span 1 /span 1",
//       "transform": "none"
//     },
//     "tags": [
//       "image"
//     ]
//   },
//   "contentType": {
//     "_emitterID": "contentType",
//     "group": "content",
//     "icon": "format_shapes",
//     "label": "content type",
//     "options": [
//       {
//         "emits": {
//           "type": "navigation"
//         },
//         "label": "navigation"
//       },
//       {
//         "emits": {
//           "type": "display-4"
//         },
//         "label": "display-4"
//       },
//       {
//         "emits": {
//           "type": "display-3"
//         },
//         "label": "display-3"
//       },
//       {
//         "emits": {
//           "type": "display-2"
//         },
//         "label": "display-2"
//       },
//       {
//         "emits": {
//           "type": "display-1"
//         },
//         "label": "display-1"
//       },
//       {
//         "emits": {
//           "type": "headline"
//         },
//         "label": "headline"
//       },
//       {
//         "emits": {
//           "type": "title"
//         },
//         "label": "title"
//       },
//       {
//         "emits": {
//           "type": "heading"
//         },
//         "label": "heading"
//       },
//       {
//         "emits": {
//           "type": "subheading"
//         },
//         "label": "subheading"
//       },
//       {
//         "emits": {
//           "type": "lead"
//         },
//         "label": "lead"
//       },
//       {
//         "emits": {
//           "type": "body"
//         },
//         "label": "body"
//       },
//       {
//         "emits": {
//           "type": "caption"
//         },
//         "label": "caption"
//       },
//       {
//         "emits": {
//           "type": "image"
//         },
//         "label": "image"
//       },
//       {
//         "emits": {
//           "type": "button"
//         },
//         "label": "button"
//       },
//       {
//         "emits": {
//           "type": "iframe"
//         },
//         "label": "iframe"
//       },
//       {
//         "emits": {
//           "type": "signup"
//         },
//         "label": "signup"
//       },
//       {
//         "emits": {
//           "type": "card"
//         },
//         "label": "card"
//       },
//       {
//         "emits": {
//           "type": "editor"
//         },
//         "label": "editor"
//       },
//       {
//         "emits": {
//           "type": "card1to8"
//         },
//         "label": "card1to8"
//       },
//       {
//         "emits": {
//           "type": "card9toN"
//         },
//         "label": "card9toN"
//       },
//       {
//         "emits": {
//           "type": "basket-products"
//         },
//         "label": "basket products"
//       },
//       {
//         "emits": {
//           "type": "basket-total"
//         },
//         "label": "basket-total"
//       },
//       {
//         "emits": {
//           "type": "basket-payment-card-element"
//         },
//         "label": "basket-payment-card-element"
//       },
//       {
//         "emits": {
//           "type": "basket-error-message"
//         },
//         "label": "basket-error-message"
//       },
//       {
//         "emits": {
//           "type": "basket-pay-submit"
//         },
//         "label": "basket-pay-submit"
//       },
//       {
//         "emits": {
//           "type": "basket-processing"
//         },
//         "label": "basket-processing"
//       },
//       {
//         "emits": {
//           "type": "product-stock"
//         },
//         "label": "product-stock"
//       },
//       {
//         "emits": {
//           "type": "basket-product-qty"
//         },
//         "label": "basket-product-qty"
//       },
//       {
//         "emits": {
//           "type": "basket-reset"
//         },
//         "label": "basket-reset"
//       },
//       {
//         "emits": {
//           "type": "basket-paypal"
//         },
//         "label": "basket-paypal"
//       },
//       {
//         "emits": {
//           "type": "basket-code"
//         },
//         "label": "basket-code"
//       },
//       {
//         "emits": {
//           "type": "basket-charge"
//         },
//         "label": "basket-charge"
//       },
//       {
//         "emits": {
//           "type": "basket-payment-buttons"
//         },
//         "label": "basket-payment-buttons"
//       },
//       {
//         "emits": {
//           "type": "custom-typography"
//         },
//         "label": "custom-typography"
//       },
//       {
//         "emits": {
//           "type": "basket-payment"
//         },
//         "label": "basket-payment"
//       },
//       {
//         "emits": {
//           "type": "basket-stripe"
//         },
//         "label": "basket-stripe"
//       },
//       {
//         "emits": {
//           "type": "e-voucher-add"
//         },
//         "label": "e-voucher-add"
//       },
//       {
//         "emits": {
//           "type": "add-to-cart-with-linked"
//         },
//         "label": "add-to-cart-with-linked"
//       },
//       {
//         "emits": {
//           "type": "component"
//         },
//         "label": "component"
//       }
//     ],
//     "placeholder": "content type",
//     "styler": {
//       "gridArea": "1 / 1  / span 1 /span 2",
//       "transform": "none"
//     },
//     "tags": [
//       "type"
//     ],
//     "valu": {
//       "path": "type",
//       "show": "value",
//       "styler": {}
//     }
//   },
//   "customBinding": {
//     "_emitterID": "customBinding",
//     "action": "inputValue",
//     "group": "section",
//     "icon": "dynamic_form",
//     "input": {
//       "path": "data.field",
//       "prompt": "customBinding"
//     },
//     "label": "customBinding",
//     "placeholder": "customBinding",
//     "styler": {
//       "gridArea": "2 / 2 / span 1 / span 1"
//     },
//     "tags": [
//       "layout",
//       "customBinding"
//     ]
//   },
//   "dataCreate": {
//     "_emitterID": "dataCreate",
//     "emits": {
//       "data": {
//         "action": "create"
//       }
//     },
//     "group": "_data",
//     "icon": "",
//     "label": "Create Form",
//     "placeholder": "Create Data",
//     "styler": {
//       "backgroundImage": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M23,8c0-1.657-1.343-3-3-3H4C2.343,5,1,6.343,1,8v8c0,1.657,1.343,3,3,3h11c0,2.209,1.791,4,4,4\ts4-1.791,4-4c0-0.579-0.129-1.126-0.35-1.622C22.866,16.963,23,16.5,23,16V8z' opacity='.35'%3E%3C/path%3E%3Cpath d='M19,14c-2.761,0-5,2.239-5,5s2.239,5,5,5s5-2.239,5-5S21.761,14,19,14z M21,20h-1v1c0,0.552-0.448,1-1,1s-1-0.448-1-1v-1h-1\tc-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1h1v-1c0-0.552,0.448-1,1-1s1,0.448,1,1v1h1c0.552,0,1,0.448,1,1\tC22,19.552,21.552,20,21,20z'%3E%3C/path%3E%3C/svg%3E\")",
//       "backgroundPosition": "center",
//       "backgroundRepeat": "no-repeat",
//       "gridArea": "3 / 1 / span 1 / span 1",
//       "transform": "scale(.75)"
//     },
//     "tags": [
//       "create",
//       "form"
//     ],
//     "valu": {
//       "path": "data.action",
//       "show": "active",
//       "styler": {}
//     }
//   },
//   "dataEdit": {
//     "_emitterID": "dataEdit",
//     "emits": {
//       "data": {
//         "action": "edit"
//       }
//     },
//     "group": "_data",
//     "icon": "",
//     "label": "dataEdit",
//     "placeholder": "dataEdit",
//     "styler": {
//       "backgroundImage": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M20,19H4c-1.657,0-3-1.343-3-3V8c0-1.657,1.343-3,3-3h16c1.657,0,3,1.343,3,3v8\tC23,17.657,21.657,19,20,19z' opacity='.35'%3E%3C/path%3E%3Cpath d='M20.966,1.431c-0.992-0.714-2.384-0.504-3.249,0.361L10.719,8.79C10.259,9.25,10,9.874,10,10.525l0,1.511\tc0,0.521,0.422,0.944,0.944,0.944l1.511,0c0.651,0,1.275-0.259,1.735-0.719l7.091-7.091C22.335,4.116,22.23,2.341,20.966,1.431z'%3E%3C/path%3E%3C/svg%3E\")",
//       "backgroundPosition": "center",
//       "backgroundRepeat": "no-repeat",
//       "gridArea": "3 / 2 / span 1 / span 1",
//       "transform": "scale(.75)"
//     },
//     "tags": [
//       "create",
//       "form"
//     ],
//     "valu": {
//       "path": "data.action",
//       "show": "active",
//       "styler": {}
//     }
//   },
//   "dataFilter": {
//     "_emitterID": "dataFilter",
//     "emits": {
//       "data": {
//         "action": "filter"
//       }
//     },
//     "group": "link",
//     "icon": "search",
//     "label": "dataFilter",
//     "placeholder": "dataFilter",
//     "styler": {
//       "backgroundPosition": "center",
//       "backgroundRepeat": "no-repeat",
//       "gridArea": "3 / 6 / span 1 / span 1",
//       "transform": ""
//     },
//     "tags": [
//       "data",
//       "filter"
//     ],
//     "valu": {
//       "path": "data.action",
//       "show": "active",
//       "styler": {}
//     }
//   }
// }

// pths= objectDotKeys(this.data).filter(p=>p.indexOf('emits')!==-1 || p.indexOf('action')!==-1 && p.indexOf('action')>6).map(p=>{
//   const pathlist = p.slice(0,p.indexOf('.emits')!==-1 ? p.indexOf('.emits')+6 : p.indexOf('.action')+7);
//   return pathlist

// })
// paths = this.pths.map(pth=>(pth.split('.')[0]));
// values = this.pths.map(pth=>(get(this.data,pth) ))
// zipped = zip(this.paths,this.values)
// }

// data = [
//   {
//     "actionCartToPayment": {
//       "data": {
//         "action": "cartPayment"
//       }
//     }
//   },
//   {
//     "addToCartSetup": "addToCartSetup"
//   },
//   {
//     "backgroundImage": "uploadFile"
//   },
//   {
//     "backgroundPosition": {
//       "styler": {
//         "backgroundPosition": "top left"
//       }
//     }
//   },
//   {
//     "backgroundPosition": {
//       "styler": {
//         "backgroundPosition": "top center"
//       }
//     }
//   },
//   {
//     "backgroundPosition": {
//       "styler": {
//         "backgroundPosition": "top right"
//       }
//     }
//   },
//   {
//     "backgroundPosition": {
//       "styler": {
//         "backgroundPosition": "left center"
//       }
//     }
//   },
//   {
//     "backgroundPosition": {
//       "styler": {
//         "backgroundPosition": "center"
//       }
//     }
//   },
//   {
//     "backgroundPosition": {
//       "styler": {
//         "backgroundPosition": "right center"
//       }
//     }
//   },
//   {
//     "backgroundPosition": {
//       "styler": {
//         "backgroundPosition": "bottom left"
//       }
//     }
//   },
//   {
//     "backgroundPosition": {
//       "styler": {
//         "backgroundPosition": "bottom center"
//       }
//     }
//   },
//   {
//     "backgroundPosition": {
//       "styler": {
//         "backgroundPosition": "bottom right"
//       }
//     }
//   },
//   {
//     "backgroundRepeat": {
//       "styler": {
//         "backgroundRepeat": "no-repeat"
//       }
//     }
//   },
//   {
//     "backgroundRepeat": {
//       "styler": {
//         "backgroundRepeat": "repeat"
//       }
//     }
//   },
//   {
//     "backgroundSize": {
//       "styler": {
//         "backgroundSize": "cover"
//       }
//     }
//   },
//   {
//     "backgroundSize": {
//       "styler": {
//         "backgroundSize": "contain"
//       }
//     }
//   },
//   {
//     "backgroundSize": {
//       "styler": {
//         "backgroundSize": "10%"
//       }
//     }
//   },
//   {
//     "backgroundSize": {
//       "styler": {
//         "backgroundSize": "20%"
//       }
//     }
//   },
//   {
//     "backgroundSize": {
//       "styler": {
//         "backgroundSize": "30%"
//       }
//     }
//   },
//   {
//     "backgroundSize": {
//       "styler": {
//         "backgroundSize": "33.34%"
//       }
//     }
//   },
//   {
//     "backgroundSize": {
//       "styler": {
//         "backgroundSize": "40%"
//       }
//     }
//   },
//   {
//     "backgroundSize": {
//       "styler": {
//         "backgroundSize": "50%"
//       }
//     }
//   },
//   {
//     "backgroundSize": {
//       "styler": {
//         "backgroundSize": "60%"
//       }
//     }
//   },
//   {
//     "backgroundSize": {
//       "styler": {
//         "backgroundSize": "70%"
//       }
//     }
//   },
//   {
//     "backgroundSize": {
//       "styler": {
//         "backgroundSize": "80%"
//       }
//     }
//   },
//   {
//     "backgroundSize": {
//       "styler": {
//         "backgroundSize": "90%"
//       }
//     }
//   },
//   {
//     "backgroundSize": {
//       "styler": {
//         "backgroundSize": "100%"
//       }
//     }
//   },
//   {
//     "backgroundSize": {
//       "styler": {
//         "backgroundSize": "200%"
//       }
//     }
//   },
//   {
//     "backgroundSize": {
//       "styler": {
//         "backgroundSize": "50px"
//       }
//     }
//   },
//   {
//     "backgroundSize": {
//       "styler": {
//         "backgroundSize": "80px"
//       }
//     }
//   },
//   {
//     "backgroundSize": {
//       "styler": {
//         "backgroundSize": "130px"
//       }
//     }
//   },
//   {
//     "backgroundSize": {
//       "styler": {
//         "backgroundSize": "280px"
//       }
//     }
//   },
//   {
//     "backgroundSize": {
//       "styler": {
//         "backgroundSize": "450px"
//       }
//     }
//   },
//   {
//     "backgroundSize": {
//       "styler": {
//         "backgroundSize": "600px"
//       }
//     }
//   },
//   {
//     "backgroundSize": {
//       "styler": {
//         "backgroundSize": "750px"
//       }
//     }
//   },
//   {
//     "borderBottomLeftRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "0px"
//       }
//     }
//   },
//   {
//     "borderBottomLeftRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "4px"
//       }
//     }
//   },
//   {
//     "borderBottomLeftRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "8px"
//       }
//     }
//   },
//   {
//     "borderBottomLeftRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "12px"
//       }
//     }
//   },
//   {
//     "borderBottomLeftRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "16px"
//       }
//     }
//   },
//   {
//     "borderBottomLeftRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "20px"
//       }
//     }
//   },
//   {
//     "borderBottomLeftRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "24px"
//       }
//     }
//   },
//   {
//     "borderBottomLeftRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "32px"
//       }
//     }
//   },
//   {
//     "borderBottomLeftRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "40px"
//       }
//     }
//   },
//   {
//     "borderBottomLeftRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "48px"
//       }
//     }
//   },
//   {
//     "borderBottomLeftRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "56px"
//       }
//     }
//   },
//   {
//     "borderBottomLeftRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "64px"
//       }
//     }
//   },
//   {
//     "borderBottomLeftRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "72px"
//       }
//     }
//   },
//   {
//     "borderBottomLeftRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "80px"
//       }
//     }
//   },
//   {
//     "borderBottomLeftRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "88px"
//       }
//     }
//   },
//   {
//     "borderBottomLeftRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "96px"
//       }
//     }
//   },
//   {
//     "borderBottomLeftRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "10%"
//       }
//     }
//   },
//   {
//     "borderBottomLeftRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "25%"
//       }
//     }
//   },
//   {
//     "borderBottomLeftRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "50%"
//       }
//     }
//   },
//   {
//     "borderBottomLeftRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "10vmin"
//       }
//     }
//   },
//   {
//     "borderBottomLeftRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "25vmin"
//       }
//     }
//   },
//   {
//     "borderBottomLeftRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "50vmin"
//       }
//     }
//   },
//   {
//     "borderBottomRightRadius": {
//       "styler": {
//         "borderBottomRightRadius": "0px"
//       }
//     }
//   },
//   {
//     "borderBottomRightRadius": {
//       "styler": {
//         "borderBottomRightRadius": "4px"
//       }
//     }
//   },
//   {
//     "borderBottomRightRadius": {
//       "styler": {
//         "borderBottomRightRadius": "8px"
//       }
//     }
//   },
//   {
//     "borderBottomRightRadius": {
//       "styler": {
//         "borderBottomRightRadius": "12px"
//       }
//     }
//   },
//   {
//     "borderBottomRightRadius": {
//       "styler": {
//         "borderBottomRightRadius": "16px"
//       }
//     }
//   },
//   {
//     "borderBottomRightRadius": {
//       "styler": {
//         "borderBottomRightRadius": "20px"
//       }
//     }
//   },
//   {
//     "borderBottomRightRadius": {
//       "styler": {
//         "borderBottomRightRadius": "24px"
//       }
//     }
//   },
//   {
//     "borderBottomRightRadius": {
//       "styler": {
//         "borderBottomRightRadius": "32px"
//       }
//     }
//   },
//   {
//     "borderBottomRightRadius": {
//       "styler": {
//         "borderBottomRightRadius": "40px"
//       }
//     }
//   },
//   {
//     "borderBottomRightRadius": {
//       "styler": {
//         "borderBottomRightRadius": "48px"
//       }
//     }
//   },
//   {
//     "borderBottomRightRadius": {
//       "styler": {
//         "borderBottomRightRadius": "56px"
//       }
//     }
//   },
//   {
//     "borderBottomRightRadius": {
//       "styler": {
//         "borderBottomRightRadius": "64px"
//       }
//     }
//   },
//   {
//     "borderBottomRightRadius": {
//       "styler": {
//         "borderBottomRightRadius": "72px"
//       }
//     }
//   },
//   {
//     "borderBottomRightRadius": {
//       "styler": {
//         "borderBottomRightRadius": "80px"
//       }
//     }
//   },
//   {
//     "borderBottomRightRadius": {
//       "styler": {
//         "borderBottomRightRadius": "88px"
//       }
//     }
//   },
//   {
//     "borderBottomRightRadius": {
//       "styler": {
//         "borderBottomRightRadius": "96px"
//       }
//     }
//   },
//   {
//     "borderBottomRightRadius": {
//       "styler": {
//         "borderBottomRightRadius": "10%"
//       }
//     }
//   },
//   {
//     "borderBottomRightRadius": {
//       "styler": {
//         "borderBottomRightRadius": "25%"
//       }
//     }
//   },
//   {
//     "borderBottomRightRadius": {
//       "styler": {
//         "borderBottomRightRadius": "50%"
//       }
//     }
//   },
//   {
//     "borderBottomRightRadius": {
//       "styler": {
//         "borderBottomRightRadius": "10vmin"
//       }
//     }
//   },
//   {
//     "borderBottomRightRadius": {
//       "styler": {
//         "borderBottomRightRadius": "25vmin"
//       }
//     }
//   },
//   {
//     "borderBottomRightRadius": {
//       "styler": {
//         "borderBottomRightRadius": "50vmin"
//       }
//     }
//   },
//   {
//     "borderBottomStyle": {
//       "styler": {
//         "borderBottomStyle": "solid"
//       }
//     }
//   },
//   {
//     "borderBottomStyle": {
//       "styler": {
//         "borderBottomStyle": "dotted"
//       }
//     }
//   },
//   {
//     "borderBottomStyle": {
//       "styler": {
//         "borderBottomStyle": "dashed"
//       }
//     }
//   },
//   {
//     "borderBottomStyle": {
//       "styler": {
//         "borderBottomStyle": "double"
//       }
//     }
//   },
//   {
//     "borderBottomStyle": {
//       "styler": {
//         "borderBottomStyle": "inset"
//       }
//     }
//   },
//   {
//     "borderBottomWidth": {
//       "styler": {
//         "borderBottomWidth": "0px"
//       }
//     }
//   },
//   {
//     "borderBottomWidth": {
//       "styler": {
//         "borderBottomWidth": "1px"
//       }
//     }
//   },
//   {
//     "borderBottomWidth": {
//       "styler": {
//         "borderBottomWidth": "2px"
//       }
//     }
//   },
//   {
//     "borderBottomWidth": {
//       "styler": {
//         "borderBottomWidth": "3px"
//       }
//     }
//   },
//   {
//     "borderBottomWidth": {
//       "styler": {
//         "borderBottomWidth": "4px"
//       }
//     }
//   },
//   {
//     "borderBottomWidth": {
//       "styler": {
//         "borderBottomWidth": "5px"
//       }
//     }
//   },
//   {
//     "borderBottomWidth": {
//       "styler": {
//         "borderBottomWidth": "8px"
//       }
//     }
//   },
//   {
//     "borderBottomWidth": {
//       "styler": {
//         "borderBottomWidth": "12px"
//       }
//     }
//   },
//   {
//     "borderBottomWidth": {
//       "styler": {
//         "borderBottomWidth": "16px"
//       }
//     }
//   },
//   {
//     "borderBottomWidth": {
//       "styler": {
//         "borderBottomWidth": "20px"
//       }
//     }
//   },
//   {
//     "borderBottomWidth": {
//       "styler": {
//         "borderBottomWidth": "40px"
//       }
//     }
//   },
//   {
//     "borderBottomWidth": {
//       "styler": {
//         "borderBottomWidth": "60px"
//       }
//     }
//   },
//   {
//     "borderBottomWidth": {
//       "styler": {
//         "borderBottomWidth": "80px"
//       }
//     }
//   },
//   {
//     "borderBottomWidth": {
//       "styler": {
//         "borderBottomWidth": "10%"
//       }
//     }
//   },
//   {
//     "borderBottomWidth": {
//       "styler": {
//         "borderBottomWidth": "20%"
//       }
//     }
//   },
//   {
//     "borderBottomWidth": {
//       "styler": {
//         "borderBottomWidth": "25%"
//       }
//     }
//   },
//   {
//     "borderBottomWidth": {
//       "styler": {
//         "borderBottomWidth": "30%"
//       }
//     }
//   },
//   {
//     "borderBottomWidth": {
//       "styler": {
//         "borderBottomWidth": "40%"
//       }
//     }
//   },
//   {
//     "borderBottomWidth": {
//       "styler": {
//         "borderBottomWidth": "50%"
//       }
//     }
//   },
//   {
//     "borderBottomWidth": {
//       "styler": {
//         "borderBottomWidth": "60%"
//       }
//     }
//   },
//   {
//     "borderBottomWidth": {
//       "styler": {
//         "borderBottomWidth": "70%"
//       }
//     }
//   },
//   {
//     "borderBottomWidth": {
//       "styler": {
//         "borderBottomWidth": "75%"
//       }
//     }
//   },
//   {
//     "borderBottomWidth": {
//       "styler": {
//         "borderBottomWidth": "80%"
//       }
//     }
//   },
//   {
//     "borderBottomWidth": {
//       "styler": {
//         "borderBottomWidth": "90%"
//       }
//     }
//   },
//   {
//     "borderBottomWidth": {
//       "styler": {
//         "borderBottomWidth": "100%"
//       }
//     }
//   },
//   {
//     "borderLeftStyle": {
//       "styler": {
//         "borderLeftStyle": "solid"
//       }
//     }
//   },
//   {
//     "borderLeftStyle": {
//       "styler": {
//         "borderLeftStyle": "dotted"
//       }
//     }
//   },
//   {
//     "borderLeftStyle": {
//       "styler": {
//         "borderLeftStyle": "dashed"
//       }
//     }
//   },
//   {
//     "borderLeftStyle": {
//       "styler": {
//         "borderLeftStyle": "double"
//       }
//     }
//   },
//   {
//     "borderLeftStyle": {
//       "styler": {
//         "borderLeftStyle": "inset"
//       }
//     }
//   },
//   {
//     "borderLeftWidth": {
//       "styler": {
//         "borderLeftWidth": "0px"
//       }
//     }
//   },
//   {
//     "borderLeftWidth": {
//       "styler": {
//         "borderLeftWidth": "1px"
//       }
//     }
//   },
//   {
//     "borderLeftWidth": {
//       "styler": {
//         "borderLeftWidth": "2px"
//       }
//     }
//   },
//   {
//     "borderLeftWidth": {
//       "styler": {
//         "borderLeftWidth": "3px"
//       }
//     }
//   },
//   {
//     "borderLeftWidth": {
//       "styler": {
//         "borderLeftWidth": "4px"
//       }
//     }
//   },
//   {
//     "borderLeftWidth": {
//       "styler": {
//         "borderLeftWidth": "5px"
//       }
//     }
//   },
//   {
//     "borderLeftWidth": {
//       "styler": {
//         "borderLeftWidth": "8px"
//       }
//     }
//   },
//   {
//     "borderLeftWidth": {
//       "styler": {
//         "borderLeftWidth": "12px"
//       }
//     }
//   },
//   {
//     "borderLeftWidth": {
//       "styler": {
//         "borderLeftWidth": "16px"
//       }
//     }
//   },
//   {
//     "borderLeftWidth": {
//       "styler": {
//         "borderLeftWidth": "20px"
//       }
//     }
//   },
//   {
//     "borderLeftWidth": {
//       "styler": {
//         "borderLeftWidth": "40px"
//       }
//     }
//   },
//   {
//     "borderLeftWidth": {
//       "styler": {
//         "borderLeftWidth": "60px"
//       }
//     }
//   },
//   {
//     "borderLeftWidth": {
//       "styler": {
//         "borderLeftWidth": "80px"
//       }
//     }
//   },
//   {
//     "borderLeftWidth": {
//       "styler": {
//         "borderLeftWidth": "10%"
//       }
//     }
//   },
//   {
//     "borderLeftWidth": {
//       "styler": {
//         "borderLeftWidth": "20%"
//       }
//     }
//   },
//   {
//     "borderLeftWidth": {
//       "styler": {
//         "borderLeftWidth": "25%"
//       }
//     }
//   },
//   {
//     "borderLeftWidth": {
//       "styler": {
//         "borderLeftWidth": "30%"
//       }
//     }
//   },
//   {
//     "borderLeftWidth": {
//       "styler": {
//         "borderLeftWidth": "40%"
//       }
//     }
//   },
//   {
//     "borderLeftWidth": {
//       "styler": {
//         "borderLeftWidth": "50%"
//       }
//     }
//   },
//   {
//     "borderLeftWidth": {
//       "styler": {
//         "borderLeftWidth": "60%"
//       }
//     }
//   },
//   {
//     "borderLeftWidth": {
//       "styler": {
//         "borderLeftWidth": "70%"
//       }
//     }
//   },
//   {
//     "borderLeftWidth": {
//       "styler": {
//         "borderLeftWidth": "75%"
//       }
//     }
//   },
//   {
//     "borderLeftWidth": {
//       "styler": {
//         "borderLeftWidth": "80%"
//       }
//     }
//   },
//   {
//     "borderLeftWidth": {
//       "styler": {
//         "borderLeftWidth": "90%"
//       }
//     }
//   },
//   {
//     "borderLeftWidth": {
//       "styler": {
//         "borderLeftWidth": "100%"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "0px",
//         "borderBottomRightRadius": "0px",
//         "borderTopLeftRadius": "0px",
//         "borderTopRightRadius": "0px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "0px",
//         "borderBottomRightRadius": "0px",
//         "borderTopLeftRadius": "0px",
//         "borderTopRightRadius": "0px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "0px",
//         "borderBottomRightRadius": "0px",
//         "borderTopLeftRadius": "0px",
//         "borderTopRightRadius": "0px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "0px",
//         "borderBottomRightRadius": "0px",
//         "borderTopLeftRadius": "0px",
//         "borderTopRightRadius": "0px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "4px",
//         "borderBottomRightRadius": "4px",
//         "borderTopLeftRadius": "4px",
//         "borderTopRightRadius": "4px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "4px",
//         "borderBottomRightRadius": "4px",
//         "borderTopLeftRadius": "4px",
//         "borderTopRightRadius": "4px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "4px",
//         "borderBottomRightRadius": "4px",
//         "borderTopLeftRadius": "4px",
//         "borderTopRightRadius": "4px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "4px",
//         "borderBottomRightRadius": "4px",
//         "borderTopLeftRadius": "4px",
//         "borderTopRightRadius": "4px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "8px",
//         "borderBottomRightRadius": "8px",
//         "borderTopLeftRadius": "8px",
//         "borderTopRightRadius": "8px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "8px",
//         "borderBottomRightRadius": "8px",
//         "borderTopLeftRadius": "8px",
//         "borderTopRightRadius": "8px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "8px",
//         "borderBottomRightRadius": "8px",
//         "borderTopLeftRadius": "8px",
//         "borderTopRightRadius": "8px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "8px",
//         "borderBottomRightRadius": "8px",
//         "borderTopLeftRadius": "8px",
//         "borderTopRightRadius": "8px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "12px",
//         "borderBottomRightRadius": "12px",
//         "borderTopLeftRadius": "12px",
//         "borderTopRightRadius": "12px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "12px",
//         "borderBottomRightRadius": "12px",
//         "borderTopLeftRadius": "12px",
//         "borderTopRightRadius": "12px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "12px",
//         "borderBottomRightRadius": "12px",
//         "borderTopLeftRadius": "12px",
//         "borderTopRightRadius": "12px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "12px",
//         "borderBottomRightRadius": "12px",
//         "borderTopLeftRadius": "12px",
//         "borderTopRightRadius": "12px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "16px",
//         "borderBottomRightRadius": "16px",
//         "borderTopLeftRadius": "16px",
//         "borderTopRightRadius": "16px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "16px",
//         "borderBottomRightRadius": "16px",
//         "borderTopLeftRadius": "16px",
//         "borderTopRightRadius": "16px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "16px",
//         "borderBottomRightRadius": "16px",
//         "borderTopLeftRadius": "16px",
//         "borderTopRightRadius": "16px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "16px",
//         "borderBottomRightRadius": "16px",
//         "borderTopLeftRadius": "16px",
//         "borderTopRightRadius": "16px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "20px",
//         "borderBottomRightRadius": "20px",
//         "borderTopLeftRadius": "20px",
//         "borderTopRightRadius": "20px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "20px",
//         "borderBottomRightRadius": "20px",
//         "borderTopLeftRadius": "20px",
//         "borderTopRightRadius": "20px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "20px",
//         "borderBottomRightRadius": "20px",
//         "borderTopLeftRadius": "20px",
//         "borderTopRightRadius": "20px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "20px",
//         "borderBottomRightRadius": "20px",
//         "borderTopLeftRadius": "20px",
//         "borderTopRightRadius": "20px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "24px",
//         "borderBottomRightRadius": "24px",
//         "borderTopLeftRadius": "24px",
//         "borderTopRightRadius": "24px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "24px",
//         "borderBottomRightRadius": "24px",
//         "borderTopLeftRadius": "24px",
//         "borderTopRightRadius": "24px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "24px",
//         "borderBottomRightRadius": "24px",
//         "borderTopLeftRadius": "24px",
//         "borderTopRightRadius": "24px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "24px",
//         "borderBottomRightRadius": "24px",
//         "borderTopLeftRadius": "24px",
//         "borderTopRightRadius": "24px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "32px",
//         "borderBottomRightRadius": "32px",
//         "borderTopLeftRadius": "32px",
//         "borderTopRightRadius": "32px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "32px",
//         "borderBottomRightRadius": "32px",
//         "borderTopLeftRadius": "32px",
//         "borderTopRightRadius": "32px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "32px",
//         "borderBottomRightRadius": "32px",
//         "borderTopLeftRadius": "32px",
//         "borderTopRightRadius": "32px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "32px",
//         "borderBottomRightRadius": "32px",
//         "borderTopLeftRadius": "32px",
//         "borderTopRightRadius": "32px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "40px",
//         "borderBottomRightRadius": "40px",
//         "borderTopLeftRadius": "40px",
//         "borderTopRightRadius": "40px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "40px",
//         "borderBottomRightRadius": "40px",
//         "borderTopLeftRadius": "40px",
//         "borderTopRightRadius": "40px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "40px",
//         "borderBottomRightRadius": "40px",
//         "borderTopLeftRadius": "40px",
//         "borderTopRightRadius": "40px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "40px",
//         "borderBottomRightRadius": "40px",
//         "borderTopLeftRadius": "40px",
//         "borderTopRightRadius": "40px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "48px",
//         "borderBottomRightRadius": "48px",
//         "borderTopLeftRadius": "48px",
//         "borderTopRightRadius": "48px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "48px",
//         "borderBottomRightRadius": "48px",
//         "borderTopLeftRadius": "48px",
//         "borderTopRightRadius": "48px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "48px",
//         "borderBottomRightRadius": "48px",
//         "borderTopLeftRadius": "48px",
//         "borderTopRightRadius": "48px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "48px",
//         "borderBottomRightRadius": "48px",
//         "borderTopLeftRadius": "48px",
//         "borderTopRightRadius": "48px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "56px",
//         "borderBottomRightRadius": "56px",
//         "borderTopLeftRadius": "56px",
//         "borderTopRightRadius": "56px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "56px",
//         "borderBottomRightRadius": "56px",
//         "borderTopLeftRadius": "56px",
//         "borderTopRightRadius": "56px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "56px",
//         "borderBottomRightRadius": "56px",
//         "borderTopLeftRadius": "56px",
//         "borderTopRightRadius": "56px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "56px",
//         "borderBottomRightRadius": "56px",
//         "borderTopLeftRadius": "56px",
//         "borderTopRightRadius": "56px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "64px",
//         "borderBottomRightRadius": "64px",
//         "borderTopLeftRadius": "64px",
//         "borderTopRightRadius": "64px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "64px",
//         "borderBottomRightRadius": "64px",
//         "borderTopLeftRadius": "64px",
//         "borderTopRightRadius": "64px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "64px",
//         "borderBottomRightRadius": "64px",
//         "borderTopLeftRadius": "64px",
//         "borderTopRightRadius": "64px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "64px",
//         "borderBottomRightRadius": "64px",
//         "borderTopLeftRadius": "64px",
//         "borderTopRightRadius": "64px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "72px",
//         "borderBottomRightRadius": "72px",
//         "borderTopLeftRadius": "72px",
//         "borderTopRightRadius": "72px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "72px",
//         "borderBottomRightRadius": "72px",
//         "borderTopLeftRadius": "72px",
//         "borderTopRightRadius": "72px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "72px",
//         "borderBottomRightRadius": "72px",
//         "borderTopLeftRadius": "72px",
//         "borderTopRightRadius": "72px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "72px",
//         "borderBottomRightRadius": "72px",
//         "borderTopLeftRadius": "72px",
//         "borderTopRightRadius": "72px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "80px",
//         "borderBottomRightRadius": "80px",
//         "borderTopLeftRadius": "80px",
//         "borderTopRightRadius": "80px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "80px",
//         "borderBottomRightRadius": "80px",
//         "borderTopLeftRadius": "80px",
//         "borderTopRightRadius": "80px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "80px",
//         "borderBottomRightRadius": "80px",
//         "borderTopLeftRadius": "80px",
//         "borderTopRightRadius": "80px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "80px",
//         "borderBottomRightRadius": "80px",
//         "borderTopLeftRadius": "80px",
//         "borderTopRightRadius": "80px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "88px",
//         "borderBottomRightRadius": "88px",
//         "borderTopLeftRadius": "88px",
//         "borderTopRightRadius": "88px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "88px",
//         "borderBottomRightRadius": "88px",
//         "borderTopLeftRadius": "88px",
//         "borderTopRightRadius": "88px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "88px",
//         "borderBottomRightRadius": "88px",
//         "borderTopLeftRadius": "88px",
//         "borderTopRightRadius": "88px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "88px",
//         "borderBottomRightRadius": "88px",
//         "borderTopLeftRadius": "88px",
//         "borderTopRightRadius": "88px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "96px",
//         "borderBottomRightRadius": "96px",
//         "borderTopLeftRadius": "96px",
//         "borderTopRightRadius": "96px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "96px",
//         "borderBottomRightRadius": "96px",
//         "borderTopLeftRadius": "96px",
//         "borderTopRightRadius": "96px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "96px",
//         "borderBottomRightRadius": "96px",
//         "borderTopLeftRadius": "96px",
//         "borderTopRightRadius": "96px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "96px",
//         "borderBottomRightRadius": "96px",
//         "borderTopLeftRadius": "96px",
//         "borderTopRightRadius": "96px"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "10%",
//         "borderBottomRightRadius": "10%",
//         "borderTopLeftRadius": "10%",
//         "borderTopRightRadius": "10%"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "10%",
//         "borderBottomRightRadius": "10%",
//         "borderTopLeftRadius": "10%",
//         "borderTopRightRadius": "10%"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "10%",
//         "borderBottomRightRadius": "10%",
//         "borderTopLeftRadius": "10%",
//         "borderTopRightRadius": "10%"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "10%",
//         "borderBottomRightRadius": "10%",
//         "borderTopLeftRadius": "10%",
//         "borderTopRightRadius": "10%"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "25%",
//         "borderBottomRightRadius": "25%",
//         "borderTopLeftRadius": "25%",
//         "borderTopRightRadius": "25%"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "25%",
//         "borderBottomRightRadius": "25%",
//         "borderTopLeftRadius": "25%",
//         "borderTopRightRadius": "25%"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "25%",
//         "borderBottomRightRadius": "25%",
//         "borderTopLeftRadius": "25%",
//         "borderTopRightRadius": "25%"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "25%",
//         "borderBottomRightRadius": "25%",
//         "borderTopLeftRadius": "25%",
//         "borderTopRightRadius": "25%"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "50%",
//         "borderBottomRightRadius": "50%",
//         "borderTopLeftRadius": "50%",
//         "borderTopRightRadius": "50%"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "50%",
//         "borderBottomRightRadius": "50%",
//         "borderTopLeftRadius": "50%",
//         "borderTopRightRadius": "50%"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "50%",
//         "borderBottomRightRadius": "50%",
//         "borderTopLeftRadius": "50%",
//         "borderTopRightRadius": "50%"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "50%",
//         "borderBottomRightRadius": "50%",
//         "borderTopLeftRadius": "50%",
//         "borderTopRightRadius": "50%"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "10vmin",
//         "borderBottomRightRadius": "10vmin",
//         "borderTopLeftRadius": "10vmin",
//         "borderTopRightRadius": "10vmin"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "10vmin",
//         "borderBottomRightRadius": "10vmin",
//         "borderTopLeftRadius": "10vmin",
//         "borderTopRightRadius": "10vmin"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "10vmin",
//         "borderBottomRightRadius": "10vmin",
//         "borderTopLeftRadius": "10vmin",
//         "borderTopRightRadius": "10vmin"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "10vmin",
//         "borderBottomRightRadius": "10vmin",
//         "borderTopLeftRadius": "10vmin",
//         "borderTopRightRadius": "10vmin"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "25vmin",
//         "borderBottomRightRadius": "25vmin",
//         "borderTopLeftRadius": "25vmin",
//         "borderTopRightRadius": "25vmin"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "25vmin",
//         "borderBottomRightRadius": "25vmin",
//         "borderTopLeftRadius": "25vmin",
//         "borderTopRightRadius": "25vmin"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "25vmin",
//         "borderBottomRightRadius": "25vmin",
//         "borderTopLeftRadius": "25vmin",
//         "borderTopRightRadius": "25vmin"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "25vmin",
//         "borderBottomRightRadius": "25vmin",
//         "borderTopLeftRadius": "25vmin",
//         "borderTopRightRadius": "25vmin"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "50vmin",
//         "borderBottomRightRadius": "50vmin",
//         "borderTopLeftRadius": "50vmin",
//         "borderTopRightRadius": "50vmin"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "50vmin",
//         "borderBottomRightRadius": "50vmin",
//         "borderTopLeftRadius": "50vmin",
//         "borderTopRightRadius": "50vmin"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "50vmin",
//         "borderBottomRightRadius": "50vmin",
//         "borderTopLeftRadius": "50vmin",
//         "borderTopRightRadius": "50vmin"
//       }
//     }
//   },
//   {
//     "borderRadius": {
//       "styler": {
//         "borderBottomLeftRadius": "50vmin",
//         "borderBottomRightRadius": "50vmin",
//         "borderTopLeftRadius": "50vmin",
//         "borderTopRightRadius": "50vmin"
//       }
//     }
//   },
//   {
//     "borderRightStyle": {
//       "styler": {
//         "borderRightStyle": "solid"
//       }
//     }
//   },
//   {
//     "borderRightStyle": {
//       "styler": {
//         "borderRightStyle": "dotted"
//       }
//     }
//   },
//   {
//     "borderRightStyle": {
//       "styler": {
//         "borderRightStyle": "dashed"
//       }
//     }
//   },
//   {
//     "borderRightStyle": {
//       "styler": {
//         "borderRightStyle": "double"
//       }
//     }
//   },
//   {
//     "borderRightStyle": {
//       "styler": {
//         "borderRightStyle": "inset"
//       }
//     }
//   },
//   {
//     "borderRightWidth": {
//       "styler": {
//         "borderRightWidth": "0px"
//       }
//     }
//   },
//   {
//     "borderRightWidth": {
//       "styler": {
//         "borderRightWidth": "1px"
//       }
//     }
//   },
//   {
//     "borderRightWidth": {
//       "styler": {
//         "borderRightWidth": "2px"
//       }
//     }
//   },
//   {
//     "borderRightWidth": {
//       "styler": {
//         "borderRightWidth": "3px"
//       }
//     }
//   },
//   {
//     "borderRightWidth": {
//       "styler": {
//         "borderRightWidth": "4px"
//       }
//     }
//   },
//   {
//     "borderRightWidth": {
//       "styler": {
//         "borderRightWidth": "5px"
//       }
//     }
//   },
//   {
//     "borderRightWidth": {
//       "styler": {
//         "borderRightWidth": "8px"
//       }
//     }
//   },
//   {
//     "borderRightWidth": {
//       "styler": {
//         "borderRightWidth": "12px"
//       }
//     }
//   },
//   {
//     "borderRightWidth": {
//       "styler": {
//         "borderRightWidth": "16px"
//       }
//     }
//   },
//   {
//     "borderRightWidth": {
//       "styler": {
//         "borderRightWidth": "20px"
//       }
//     }
//   },
//   {
//     "borderRightWidth": {
//       "styler": {
//         "borderRightWidth": "40px"
//       }
//     }
//   },
//   {
//     "borderRightWidth": {
//       "styler": {
//         "borderRightWidth": "60px"
//       }
//     }
//   },
//   {
//     "borderRightWidth": {
//       "styler": {
//         "borderRightWidth": "80px"
//       }
//     }
//   },
//   {
//     "borderRightWidth": {
//       "styler": {
//         "borderRightWidth": "10%"
//       }
//     }
//   },
//   {
//     "borderRightWidth": {
//       "styler": {
//         "borderRightWidth": "20%"
//       }
//     }
//   },
//   {
//     "borderRightWidth": {
//       "styler": {
//         "borderRightWidth": "25%"
//       }
//     }
//   },
//   {
//     "borderRightWidth": {
//       "styler": {
//         "borderRightWidth": "30%"
//       }
//     }
//   },
//   {
//     "borderRightWidth": {
//       "styler": {
//         "borderRightWidth": "40%"
//       }
//     }
//   },
//   {
//     "borderRightWidth": {
//       "styler": {
//         "borderRightWidth": "50%"
//       }
//     }
//   },
//   {
//     "borderRightWidth": {
//       "styler": {
//         "borderRightWidth": "60%"
//       }
//     }
//   },
//   {
//     "borderRightWidth": {
//       "styler": {
//         "borderRightWidth": "70%"
//       }
//     }
//   },
//   {
//     "borderRightWidth": {
//       "styler": {
//         "borderRightWidth": "75%"
//       }
//     }
//   },
//   {
//     "borderRightWidth": {
//       "styler": {
//         "borderRightWidth": "80%"
//       }
//     }
//   },
//   {
//     "borderRightWidth": {
//       "styler": {
//         "borderRightWidth": "90%"
//       }
//     }
//   },
//   {
//     "borderRightWidth": {
//       "styler": {
//         "borderRightWidth": "100%"
//       }
//     }
//   },
//   {
//     "borderStyle": {
//       "styler": {
//         "borderBottomStyle": "solid",
//         "borderLeftStyle": "solid",
//         "borderRightStyle": "solid",
//         "borderTopStyle": "solid"
//       }
//     }
//   },
//   {
//     "borderStyle": {
//       "styler": {
//         "borderBottomStyle": "solid",
//         "borderLeftStyle": "solid",
//         "borderRightStyle": "solid",
//         "borderTopStyle": "solid"
//       }
//     }
//   },
//   {
//     "borderStyle": {
//       "styler": {
//         "borderBottomStyle": "solid",
//         "borderLeftStyle": "solid",
//         "borderRightStyle": "solid",
//         "borderTopStyle": "solid"
//       }
//     }
//   },
//   {
//     "borderStyle": {
//       "styler": {
//         "borderBottomStyle": "solid",
//         "borderLeftStyle": "solid",
//         "borderRightStyle": "solid",
//         "borderTopStyle": "solid"
//       }
//     }
//   },
//   {
//     "borderStyle": {
//       "styler": {
//         "borderBottomStyle": "dotted",
//         "borderLeftStyle": "dotted",
//         "borderRightStyle": "dotted",
//         "borderTopStyle": "dotted"
//       }
//     }
//   },
//   {
//     "borderStyle": {
//       "styler": {
//         "borderBottomStyle": "dotted",
//         "borderLeftStyle": "dotted",
//         "borderRightStyle": "dotted",
//         "borderTopStyle": "dotted"
//       }
//     }
//   },
//   {
//     "borderStyle": {
//       "styler": {
//         "borderBottomStyle": "dotted",
//         "borderLeftStyle": "dotted",
//         "borderRightStyle": "dotted",
//         "borderTopStyle": "dotted"
//       }
//     }
//   },
//   {
//     "borderStyle": {
//       "styler": {
//         "borderBottomStyle": "dotted",
//         "borderLeftStyle": "dotted",
//         "borderRightStyle": "dotted",
//         "borderTopStyle": "dotted"
//       }
//     }
//   },
//   {
//     "borderStyle": {
//       "styler": {
//         "borderBottomStyle": "dashed",
//         "borderLeftStyle": "dashed",
//         "borderRightStyle": "dashed",
//         "borderTopStyle": "dashed"
//       }
//     }
//   },
//   {
//     "borderStyle": {
//       "styler": {
//         "borderBottomStyle": "dashed",
//         "borderLeftStyle": "dashed",
//         "borderRightStyle": "dashed",
//         "borderTopStyle": "dashed"
//       }
//     }
//   },
//   {
//     "borderStyle": {
//       "styler": {
//         "borderBottomStyle": "dashed",
//         "borderLeftStyle": "dashed",
//         "borderRightStyle": "dashed",
//         "borderTopStyle": "dashed"
//       }
//     }
//   },
//   {
//     "borderStyle": {
//       "styler": {
//         "borderBottomStyle": "dashed",
//         "borderLeftStyle": "dashed",
//         "borderRightStyle": "dashed",
//         "borderTopStyle": "dashed"
//       }
//     }
//   },
//   {
//     "borderStyle": {
//       "styler": {
//         "borderBottomStyle": "double",
//         "borderLeftStyle": "double",
//         "borderRightStyle": "double",
//         "borderTopStyle": "double"
//       }
//     }
//   },
//   {
//     "borderStyle": {
//       "styler": {
//         "borderBottomStyle": "double",
//         "borderLeftStyle": "double",
//         "borderRightStyle": "double",
//         "borderTopStyle": "double"
//       }
//     }
//   },
//   {
//     "borderStyle": {
//       "styler": {
//         "borderBottomStyle": "double",
//         "borderLeftStyle": "double",
//         "borderRightStyle": "double",
//         "borderTopStyle": "double"
//       }
//     }
//   },
//   {
//     "borderStyle": {
//       "styler": {
//         "borderBottomStyle": "double",
//         "borderLeftStyle": "double",
//         "borderRightStyle": "double",
//         "borderTopStyle": "double"
//       }
//     }
//   },
//   {
//     "borderStyle": {
//       "styler": {
//         "borderBottomStyle": "inset",
//         "borderLeftStyle": "inset",
//         "borderRightStyle": "inset",
//         "borderTopStyle": "inset"
//       }
//     }
//   },
//   {
//     "borderStyle": {
//       "styler": {
//         "borderBottomStyle": "inset",
//         "borderLeftStyle": "inset",
//         "borderRightStyle": "inset",
//         "borderTopStyle": "inset"
//       }
//     }
//   },
//   {
//     "borderStyle": {
//       "styler": {
//         "borderBottomStyle": "inset",
//         "borderLeftStyle": "inset",
//         "borderRightStyle": "inset",
//         "borderTopStyle": "inset"
//       }
//     }
//   },
//   {
//     "borderStyle": {
//       "styler": {
//         "borderBottomStyle": "inset",
//         "borderLeftStyle": "inset",
//         "borderRightStyle": "inset",
//         "borderTopStyle": "inset"
//       }
//     }
//   },
//   {
//     "borderTopLeftRadius": {
//       "styler": {
//         "borderTopLeftRadius": "0px"
//       }
//     }
//   },
//   {
//     "borderTopLeftRadius": {
//       "styler": {
//         "borderTopLeftRadius": "4px"
//       }
//     }
//   },
//   {
//     "borderTopLeftRadius": {
//       "styler": {
//         "borderTopLeftRadius": "8px"
//       }
//     }
//   },
//   {
//     "borderTopLeftRadius": {
//       "styler": {
//         "borderTopLeftRadius": "12px"
//       }
//     }
//   },
//   {
//     "borderTopLeftRadius": {
//       "styler": {
//         "borderTopLeftRadius": "16px"
//       }
//     }
//   },
//   {
//     "borderTopLeftRadius": {
//       "styler": {
//         "borderTopLeftRadius": "20px"
//       }
//     }
//   },
//   {
//     "borderTopLeftRadius": {
//       "styler": {
//         "borderTopLeftRadius": "24px"
//       }
//     }
//   },
//   {
//     "borderTopLeftRadius": {
//       "styler": {
//         "borderTopLeftRadius": "32px"
//       }
//     }
//   },
//   {
//     "borderTopLeftRadius": {
//       "styler": {
//         "borderTopLeftRadius": "40px"
//       }
//     }
//   },
//   {
//     "borderTopLeftRadius": {
//       "styler": {
//         "borderTopLeftRadius": "48px"
//       }
//     }
//   },
//   {
//     "borderTopLeftRadius": {
//       "styler": {
//         "borderTopLeftRadius": "56px"
//       }
//     }
//   },
//   {
//     "borderTopLeftRadius": {
//       "styler": {
//         "borderTopLeftRadius": "64px"
//       }
//     }
//   },
//   {
//     "borderTopLeftRadius": {
//       "styler": {
//         "borderTopLeftRadius": "72px"
//       }
//     }
//   },
//   {
//     "borderTopLeftRadius": {
//       "styler": {
//         "borderTopLeftRadius": "80px"
//       }
//     }
//   },
//   {
//     "borderTopLeftRadius": {
//       "styler": {
//         "borderTopLeftRadius": "88px"
//       }
//     }
//   },
//   {
//     "borderTopLeftRadius": {
//       "styler": {
//         "borderTopLeftRadius": "96px"
//       }
//     }
//   },
//   {
//     "borderTopLeftRadius": {
//       "styler": {
//         "borderTopLeftRadius": "10%"
//       }
//     }
//   },
//   {
//     "borderTopLeftRadius": {
//       "styler": {
//         "borderTopLeftRadius": "25%"
//       }
//     }
//   },
//   {
//     "borderTopLeftRadius": {
//       "styler": {
//         "borderTopLeftRadius": "50%"
//       }
//     }
//   },
//   {
//     "borderTopLeftRadius": {
//       "styler": {
//         "borderTopLeftRadius": "10vmin"
//       }
//     }
//   },
//   {
//     "borderTopLeftRadius": {
//       "styler": {
//         "borderTopLeftRadius": "25vmin"
//       }
//     }
//   },
//   {
//     "borderTopLeftRadius": {
//       "styler": {
//         "borderTopLeftRadius": "50vmin"
//       }
//     }
//   },
//   {
//     "borderTopRightRadius": {
//       "styler": {
//         "borderTopRightRadius": "0px"
//       }
//     }
//   },
//   {
//     "borderTopRightRadius": {
//       "styler": {
//         "borderTopRightRadius": "4px"
//       }
//     }
//   },
//   {
//     "borderTopRightRadius": {
//       "styler": {
//         "borderTopRightRadius": "8px"
//       }
//     }
//   },
//   {
//     "borderTopRightRadius": {
//       "styler": {
//         "borderTopRightRadius": "12px"
//       }
//     }
//   },
//   {
//     "borderTopRightRadius": {
//       "styler": {
//         "borderTopRightRadius": "16px"
//       }
//     }
//   },
//   {
//     "borderTopRightRadius": {
//       "styler": {
//         "borderTopRightRadius": "20px"
//       }
//     }
//   },
//   {
//     "borderTopRightRadius": {
//       "styler": {
//         "borderTopRightRadius": "24px"
//       }
//     }
//   },
//   {
//     "borderTopRightRadius": {
//       "styler": {
//         "borderTopRightRadius": "32px"
//       }
//     }
//   },
//   {
//     "borderTopRightRadius": {
//       "styler": {
//         "borderTopRightRadius": "40px"
//       }
//     }
//   },
//   {
//     "borderTopRightRadius": {
//       "styler": {
//         "borderTopRightRadius": "48px"
//       }
//     }
//   },
//   {
//     "borderTopRightRadius": {
//       "styler": {
//         "borderTopRightRadius": "56px"
//       }
//     }
//   },
//   {
//     "borderTopRightRadius": {
//       "styler": {
//         "borderTopRightRadius": "64px"
//       }
//     }
//   },
//   {
//     "borderTopRightRadius": {
//       "styler": {
//         "borderTopRightRadius": "72px"
//       }
//     }
//   },
//   {
//     "borderTopRightRadius": {
//       "styler": {
//         "borderTopRightRadius": "80px"
//       }
//     }
//   },
//   {
//     "borderTopRightRadius": {
//       "styler": {
//         "borderTopRightRadius": "88px"
//       }
//     }
//   },
//   {
//     "borderTopRightRadius": {
//       "styler": {
//         "borderTopRightRadius": "96px"
//       }
//     }
//   },
//   {
//     "borderTopRightRadius": {
//       "styler": {
//         "borderTopRightRadius": "10%"
//       }
//     }
//   },
//   {
//     "borderTopRightRadius": {
//       "styler": {
//         "borderTopRightRadius": "25%"
//       }
//     }
//   },
//   {
//     "borderTopRightRadius": {
//       "styler": {
//         "borderTopRightRadius": "50%"
//       }
//     }
//   },
//   {
//     "borderTopRightRadius": {
//       "styler": {
//         "borderTopRightRadius": "10vmin"
//       }
//     }
//   },
//   {
//     "borderTopRightRadius": {
//       "styler": {
//         "borderTopRightRadius": "25vmin"
//       }
//     }
//   },
//   {
//     "borderTopRightRadius": {
//       "styler": {
//         "borderTopRightRadius": "50vmin"
//       }
//     }
//   },
//   {
//     "borderTopStyle": {
//       "styler": {
//         "borderTopStyle": "solid"
//       }
//     }
//   },
//   {
//     "borderTopStyle": {
//       "styler": {
//         "borderTopStyle": "dotted"
//       }
//     }
//   },
//   {
//     "borderTopStyle": {
//       "styler": {
//         "borderTopStyle": "dashed"
//       }
//     }
//   },
//   {
//     "borderTopStyle": {
//       "styler": {
//         "borderTopStyle": "double"
//       }
//     }
//   },
//   {
//     "borderTopStyle": {
//       "styler": {
//         "borderTopStyle": "inset"
//       }
//     }
//   },
//   {
//     "borderTopWidth": {
//       "styler": {
//         "borderTopWidth": "0px"
//       }
//     }
//   },
//   {
//     "borderTopWidth": {
//       "styler": {
//         "borderTopWidth": "1px"
//       }
//     }
//   },
//   {
//     "borderTopWidth": {
//       "styler": {
//         "borderTopWidth": "2px"
//       }
//     }
//   },
//   {
//     "borderTopWidth": {
//       "styler": {
//         "borderTopWidth": "3px"
//       }
//     }
//   },
//   {
//     "borderTopWidth": {
//       "styler": {
//         "borderTopWidth": "4px"
//       }
//     }
//   },
//   {
//     "borderTopWidth": {
//       "styler": {
//         "borderTopWidth": "5px"
//       }
//     }
//   },
//   {
//     "borderTopWidth": {
//       "styler": {
//         "borderTopWidth": "8px"
//       }
//     }
//   },
//   {
//     "borderTopWidth": {
//       "styler": {
//         "borderTopWidth": "12px"
//       }
//     }
//   },
//   {
//     "borderTopWidth": {
//       "styler": {
//         "borderTopWidth": "16px"
//       }
//     }
//   },
//   {
//     "borderTopWidth": {
//       "styler": {
//         "borderTopWidth": "20px"
//       }
//     }
//   },
//   {
//     "borderTopWidth": {
//       "styler": {
//         "borderTopWidth": "40px"
//       }
//     }
//   },
//   {
//     "borderTopWidth": {
//       "styler": {
//         "borderTopWidth": "60px"
//       }
//     }
//   },
//   {
//     "borderTopWidth": {
//       "styler": {
//         "borderTopWidth": "80px"
//       }
//     }
//   },
//   {
//     "borderTopWidth": {
//       "styler": {
//         "borderTopWidth": "10%"
//       }
//     }
//   },
//   {
//     "borderTopWidth": {
//       "styler": {
//         "borderTopWidth": "20%"
//       }
//     }
//   },
//   {
//     "borderTopWidth": {
//       "styler": {
//         "borderTopWidth": "25%"
//       }
//     }
//   },
//   {
//     "borderTopWidth": {
//       "styler": {
//         "borderTopWidth": "30%"
//       }
//     }
//   },
//   {
//     "borderTopWidth": {
//       "styler": {
//         "borderTopWidth": "40%"
//       }
//     }
//   },
//   {
//     "borderTopWidth": {
//       "styler": {
//         "borderTopWidth": "50%"
//       }
//     }
//   },
//   {
//     "borderTopWidth": {
//       "styler": {
//         "borderTopWidth": "60%"
//       }
//     }
//   },
//   {
//     "borderTopWidth": {
//       "styler": {
//         "borderTopWidth": "70%"
//       }
//     }
//   },
//   {
//     "borderTopWidth": {
//       "styler": {
//         "borderTopWidth": "75%"
//       }
//     }
//   },
//   {
//     "borderTopWidth": {
//       "styler": {
//         "borderTopWidth": "80%"
//       }
//     }
//   },
//   {
//     "borderTopWidth": {
//       "styler": {
//         "borderTopWidth": "90%"
//       }
//     }
//   },
//   {
//     "borderTopWidth": {
//       "styler": {
//         "borderTopWidth": "100%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "0px",
//         "borderLeftWidth": "0px",
//         "borderRightWidth": "0px",
//         "borderTopWidth": "0px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "0px",
//         "borderLeftWidth": "0px",
//         "borderRightWidth": "0px",
//         "borderTopWidth": "0px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "0px",
//         "borderLeftWidth": "0px",
//         "borderRightWidth": "0px",
//         "borderTopWidth": "0px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "0px",
//         "borderLeftWidth": "0px",
//         "borderRightWidth": "0px",
//         "borderTopWidth": "0px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "1px",
//         "borderLeftWidth": "1px",
//         "borderRightWidth": "1px",
//         "borderTopWidth": "1px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "1px",
//         "borderLeftWidth": "1px",
//         "borderRightWidth": "1px",
//         "borderTopWidth": "1px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "1px",
//         "borderLeftWidth": "1px",
//         "borderRightWidth": "1px",
//         "borderTopWidth": "1px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "1px",
//         "borderLeftWidth": "1px",
//         "borderRightWidth": "1px",
//         "borderTopWidth": "1px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "2px",
//         "borderLeftWidth": "2px",
//         "borderRightWidth": "2px",
//         "borderTopWidth": "2px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "2px",
//         "borderLeftWidth": "2px",
//         "borderRightWidth": "2px",
//         "borderTopWidth": "2px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "2px",
//         "borderLeftWidth": "2px",
//         "borderRightWidth": "2px",
//         "borderTopWidth": "2px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "2px",
//         "borderLeftWidth": "2px",
//         "borderRightWidth": "2px",
//         "borderTopWidth": "2px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "3px",
//         "borderLeftWidth": "3px",
//         "borderRightWidth": "3px",
//         "borderTopWidth": "3px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "3px",
//         "borderLeftWidth": "3px",
//         "borderRightWidth": "3px",
//         "borderTopWidth": "3px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "3px",
//         "borderLeftWidth": "3px",
//         "borderRightWidth": "3px",
//         "borderTopWidth": "3px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "3px",
//         "borderLeftWidth": "3px",
//         "borderRightWidth": "3px",
//         "borderTopWidth": "3px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "4px",
//         "borderLeftWidth": "4px",
//         "borderRightWidth": "4px",
//         "borderTopWidth": "4px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "4px",
//         "borderLeftWidth": "4px",
//         "borderRightWidth": "4px",
//         "borderTopWidth": "4px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "4px",
//         "borderLeftWidth": "4px",
//         "borderRightWidth": "4px",
//         "borderTopWidth": "4px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "4px",
//         "borderLeftWidth": "4px",
//         "borderRightWidth": "4px",
//         "borderTopWidth": "4px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "5px",
//         "borderLeftWidth": "5px",
//         "borderRightWidth": "5px",
//         "borderTopWidth": "5px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "5px",
//         "borderLeftWidth": "5px",
//         "borderRightWidth": "5px",
//         "borderTopWidth": "5px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "5px",
//         "borderLeftWidth": "5px",
//         "borderRightWidth": "5px",
//         "borderTopWidth": "5px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "5px",
//         "borderLeftWidth": "5px",
//         "borderRightWidth": "5px",
//         "borderTopWidth": "5px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "8px",
//         "borderLeftWidth": "8px",
//         "borderRightWidth": "8px",
//         "borderTopWidth": "8px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "8px",
//         "borderLeftWidth": "8px",
//         "borderRightWidth": "8px",
//         "borderTopWidth": "8px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "8px",
//         "borderLeftWidth": "8px",
//         "borderRightWidth": "8px",
//         "borderTopWidth": "8px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "8px",
//         "borderLeftWidth": "8px",
//         "borderRightWidth": "8px",
//         "borderTopWidth": "8px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "12px",
//         "borderLeftWidth": "12px",
//         "borderRightWidth": "12px",
//         "borderTopWidth": "12px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "12px",
//         "borderLeftWidth": "12px",
//         "borderRightWidth": "12px",
//         "borderTopWidth": "12px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "12px",
//         "borderLeftWidth": "12px",
//         "borderRightWidth": "12px",
//         "borderTopWidth": "12px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "12px",
//         "borderLeftWidth": "12px",
//         "borderRightWidth": "12px",
//         "borderTopWidth": "12px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "16px",
//         "borderLeftWidth": "16px",
//         "borderRightWidth": "16px",
//         "borderTopWidth": "16px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "16px",
//         "borderLeftWidth": "16px",
//         "borderRightWidth": "16px",
//         "borderTopWidth": "16px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "16px",
//         "borderLeftWidth": "16px",
//         "borderRightWidth": "16px",
//         "borderTopWidth": "16px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "16px",
//         "borderLeftWidth": "16px",
//         "borderRightWidth": "16px",
//         "borderTopWidth": "16px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "20px",
//         "borderLeftWidth": "20px",
//         "borderRightWidth": "20px",
//         "borderTopWidth": "20px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "20px",
//         "borderLeftWidth": "20px",
//         "borderRightWidth": "20px",
//         "borderTopWidth": "20px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "20px",
//         "borderLeftWidth": "20px",
//         "borderRightWidth": "20px",
//         "borderTopWidth": "20px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "20px",
//         "borderLeftWidth": "20px",
//         "borderRightWidth": "20px",
//         "borderTopWidth": "20px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "40px",
//         "borderLeftWidth": "40px",
//         "borderRightWidth": "40px",
//         "borderTopWidth": "40px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "40px",
//         "borderLeftWidth": "40px",
//         "borderRightWidth": "40px",
//         "borderTopWidth": "40px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "40px",
//         "borderLeftWidth": "40px",
//         "borderRightWidth": "40px",
//         "borderTopWidth": "40px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "40px",
//         "borderLeftWidth": "40px",
//         "borderRightWidth": "40px",
//         "borderTopWidth": "40px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "60px",
//         "borderLeftWidth": "60px",
//         "borderRightWidth": "60px",
//         "borderTopWidth": "60px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "60px",
//         "borderLeftWidth": "60px",
//         "borderRightWidth": "60px",
//         "borderTopWidth": "60px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "60px",
//         "borderLeftWidth": "60px",
//         "borderRightWidth": "60px",
//         "borderTopWidth": "60px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "60px",
//         "borderLeftWidth": "60px",
//         "borderRightWidth": "60px",
//         "borderTopWidth": "60px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "80px",
//         "borderLeftWidth": "80px",
//         "borderRightWidth": "80px",
//         "borderTopWidth": "80px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "80px",
//         "borderLeftWidth": "80px",
//         "borderRightWidth": "80px",
//         "borderTopWidth": "80px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "80px",
//         "borderLeftWidth": "80px",
//         "borderRightWidth": "80px",
//         "borderTopWidth": "80px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "80px",
//         "borderLeftWidth": "80px",
//         "borderRightWidth": "80px",
//         "borderTopWidth": "80px"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "10%",
//         "borderLeftWidth": "10%",
//         "borderRightWidth": "10%",
//         "borderTopWidth": "10%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "10%",
//         "borderLeftWidth": "10%",
//         "borderRightWidth": "10%",
//         "borderTopWidth": "10%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "10%",
//         "borderLeftWidth": "10%",
//         "borderRightWidth": "10%",
//         "borderTopWidth": "10%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "10%",
//         "borderLeftWidth": "10%",
//         "borderRightWidth": "10%",
//         "borderTopWidth": "10%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "20%",
//         "borderLeftWidth": "20%",
//         "borderRightWidth": "20%",
//         "borderTopWidth": "20%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "20%",
//         "borderLeftWidth": "20%",
//         "borderRightWidth": "20%",
//         "borderTopWidth": "20%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "20%",
//         "borderLeftWidth": "20%",
//         "borderRightWidth": "20%",
//         "borderTopWidth": "20%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "20%",
//         "borderLeftWidth": "20%",
//         "borderRightWidth": "20%",
//         "borderTopWidth": "20%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "25%",
//         "borderLeftWidth": "25%",
//         "borderRightWidth": "25%",
//         "borderTopWidth": "25%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "25%",
//         "borderLeftWidth": "25%",
//         "borderRightWidth": "25%",
//         "borderTopWidth": "25%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "25%",
//         "borderLeftWidth": "25%",
//         "borderRightWidth": "25%",
//         "borderTopWidth": "25%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "25%",
//         "borderLeftWidth": "25%",
//         "borderRightWidth": "25%",
//         "borderTopWidth": "25%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "30%",
//         "borderLeftWidth": "30%",
//         "borderRightWidth": "30%",
//         "borderTopWidth": "30%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "30%",
//         "borderLeftWidth": "30%",
//         "borderRightWidth": "30%",
//         "borderTopWidth": "30%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "30%",
//         "borderLeftWidth": "30%",
//         "borderRightWidth": "30%",
//         "borderTopWidth": "30%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "30%",
//         "borderLeftWidth": "30%",
//         "borderRightWidth": "30%",
//         "borderTopWidth": "30%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "40%",
//         "borderLeftWidth": "40%",
//         "borderRightWidth": "40%",
//         "borderTopWidth": "40%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "40%",
//         "borderLeftWidth": "40%",
//         "borderRightWidth": "40%",
//         "borderTopWidth": "40%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "40%",
//         "borderLeftWidth": "40%",
//         "borderRightWidth": "40%",
//         "borderTopWidth": "40%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "40%",
//         "borderLeftWidth": "40%",
//         "borderRightWidth": "40%",
//         "borderTopWidth": "40%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "50%",
//         "borderLeftWidth": "50%",
//         "borderRightWidth": "50%",
//         "borderTopWidth": "50%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "50%",
//         "borderLeftWidth": "50%",
//         "borderRightWidth": "50%",
//         "borderTopWidth": "50%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "50%",
//         "borderLeftWidth": "50%",
//         "borderRightWidth": "50%",
//         "borderTopWidth": "50%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "50%",
//         "borderLeftWidth": "50%",
//         "borderRightWidth": "50%",
//         "borderTopWidth": "50%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "60%",
//         "borderLeftWidth": "60%",
//         "borderRightWidth": "60%",
//         "borderTopWidth": "60%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "60%",
//         "borderLeftWidth": "60%",
//         "borderRightWidth": "60%",
//         "borderTopWidth": "60%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "60%",
//         "borderLeftWidth": "60%",
//         "borderRightWidth": "60%",
//         "borderTopWidth": "60%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "60%",
//         "borderLeftWidth": "60%",
//         "borderRightWidth": "60%",
//         "borderTopWidth": "60%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "70%",
//         "borderLeftWidth": "70%",
//         "borderRightWidth": "70%",
//         "borderTopWidth": "70%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "70%",
//         "borderLeftWidth": "70%",
//         "borderRightWidth": "70%",
//         "borderTopWidth": "70%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "70%",
//         "borderLeftWidth": "70%",
//         "borderRightWidth": "70%",
//         "borderTopWidth": "70%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "70%",
//         "borderLeftWidth": "70%",
//         "borderRightWidth": "70%",
//         "borderTopWidth": "70%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "75%",
//         "borderLeftWidth": "75%",
//         "borderRightWidth": "75%",
//         "borderTopWidth": "75%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "75%",
//         "borderLeftWidth": "75%",
//         "borderRightWidth": "75%",
//         "borderTopWidth": "75%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "75%",
//         "borderLeftWidth": "75%",
//         "borderRightWidth": "75%",
//         "borderTopWidth": "75%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "75%",
//         "borderLeftWidth": "75%",
//         "borderRightWidth": "75%",
//         "borderTopWidth": "75%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "80%",
//         "borderLeftWidth": "80%",
//         "borderRightWidth": "80%",
//         "borderTopWidth": "80%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "80%",
//         "borderLeftWidth": "80%",
//         "borderRightWidth": "80%",
//         "borderTopWidth": "80%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "80%",
//         "borderLeftWidth": "80%",
//         "borderRightWidth": "80%",
//         "borderTopWidth": "80%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "80%",
//         "borderLeftWidth": "80%",
//         "borderRightWidth": "80%",
//         "borderTopWidth": "80%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "90%",
//         "borderLeftWidth": "90%",
//         "borderRightWidth": "90%",
//         "borderTopWidth": "90%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "90%",
//         "borderLeftWidth": "90%",
//         "borderRightWidth": "90%",
//         "borderTopWidth": "90%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "90%",
//         "borderLeftWidth": "90%",
//         "borderRightWidth": "90%",
//         "borderTopWidth": "90%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "90%",
//         "borderLeftWidth": "90%",
//         "borderRightWidth": "90%",
//         "borderTopWidth": "90%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "100%",
//         "borderLeftWidth": "100%",
//         "borderRightWidth": "100%",
//         "borderTopWidth": "100%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "100%",
//         "borderLeftWidth": "100%",
//         "borderRightWidth": "100%",
//         "borderTopWidth": "100%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "100%",
//         "borderLeftWidth": "100%",
//         "borderRightWidth": "100%",
//         "borderTopWidth": "100%"
//       }
//     }
//   },
//   {
//     "borderWidth": {
//       "styler": {
//         "borderBottomWidth": "100%",
//         "borderLeftWidth": "100%",
//         "borderRightWidth": "100%",
//         "borderTopWidth": "100%"
//       }
//     }
//   },
//   {
//     "boxShadow": {
//       "styler": {
//         "boxShadow": "none"
//       }
//     }
//   },
//   {
//     "boxShadow": {
//       "styler": {
//         "boxShadow": "0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12), 0 1px 3px 0 rgba(0, 0, 0, .20)"
//       }
//     }
//   },
//   {
//     "boxShadow": {
//       "styler": {
//         "boxShadow": "0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .12), 0 1px 5px 0 rgba(0, 0, 0, .20)"
//       }
//     }
//   },
//   {
//     "boxShadow": {
//       "styler": {
//         "boxShadow": "0 3px 4px 0 rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .12), 0 1px 8px 0 rgba(0, 0, 0, .20)"
//       }
//     }
//   },
//   {
//     "boxShadow": {
//       "styler": {
//         "boxShadow": "0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .20)"
//       }
//     }
//   },
//   {
//     "boxShadow": {
//       "styler": {
//         "boxShadow": "0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12), 0 3px 5px -1px rgba(0, 0, 0, .20)"
//       }
//     }
//   },
//   {
//     "boxShadow": {
//       "styler": {
//         "boxShadow": "0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12), 0 5px 5px -3px rgba(0, 0, 0, .20)"
//       }
//     }
//   },
//   {
//     "boxShadow": {
//       "styler": {
//         "boxShadow": "0 9px 12px 1px rgba(0, 0, 0, .14), 0 3px 16px 2px rgba(0, 0, 0, .12), 0 5px 6px -3px rgba(0, 0, 0, .20)"
//       }
//     }
//   },
//   {
//     "boxShadow": {
//       "styler": {
//         "boxShadow": "0 12px 17px 2px rgba(0, 0, 0, .14), 0 5px 22px 4px rgba(0, 0, 0, .12), 0 7px 8px -4px rgba(0, 0, 0, .20)"
//       }
//     }
//   },
//   {
//     "boxShadow": {
//       "styler": {
//         "boxShadow": "0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .20)"
//       }
//     }
//   },
//   {
//     "boxShadow": {
//       "styler": {
//         "boxShadow": "0 24px 38px 3px rgba(0, 0, 0, .14), 0 9px 46px 8px rgba(0, 0, 0, .12), 0 11px 15px -7px rgba(0, 0, 0, .20)"
//       }
//     }
//   },
//   {
//     "boxShadow": {
//       "styler": {
//         "boxShadow": "0 1px 1px 0 rgba(255,255,255, .14), 0 2px 1px -1px rgba(255,255,255, .12), 0 1px 3px 0 rgba(255,255,255, .20)"
//       }
//     }
//   },
//   {
//     "boxShadow": {
//       "styler": {
//         "boxShadow": "0 2px 2px 0 rgba(255,255,255, .14), 0 3px 1px -2px rgba(255,255,255, .12), 0 1px 5px 0 rgba(255,255,255, .20)"
//       }
//     }
//   },
//   {
//     "boxShadow": {
//       "styler": {
//         "boxShadow": "0 3px 4px 0 rgba(255,255,255, .14), 0 3px 3px -2px rgba(255,255,255, .12), 0 1px 8px 0 rgba(255,255,255, .20)"
//       }
//     }
//   },
//   {
//     "boxShadow": {
//       "styler": {
//         "boxShadow": "0 4px 5px 0 rgba(255,255,255, .14), 0 1px 10px 0 rgba(255,255,255, .12), 0 2px 4px -1px rgba(255,255,255, .20)"
//       }
//     }
//   },
//   {
//     "boxShadow": {
//       "styler": {
//         "boxShadow": "0 6px 10px 0 rgba(255,255,255, .14), 0 1px 18px 0 rgba(255,255,255, .12), 0 3px 5px -1px rgba(255,255,255, .20)"
//       }
//     }
//   },
//   {
//     "boxShadow": {
//       "styler": {
//         "boxShadow": "0 8px 10px 1px rgba(255,255,255, .14), 0 3px 14px 2px rgba(255,255,255, .12), 0 5px 5px -3px rgba(255,255,255, .20)"
//       }
//     }
//   },
//   {
//     "boxShadow": {
//       "styler": {
//         "boxShadow": "0 9px 12px 1px rgba(255,255,255, .14), 0 3px 16px 2px rgba(255,255,255, .12), 0 5px 6px -3px rgba(255,255,255, .20)"
//       }
//     }
//   },
//   {
//     "boxShadow": {
//       "styler": {
//         "boxShadow": "0 12px 17px 2px rgba(255,255,255, .14), 0 5px 22px 4px rgba(255,255,255, .12), 0 7px 8px -4px rgba(255,255,255, .20)"
//       }
//     }
//   },
//   {
//     "boxShadow": {
//       "styler": {
//         "boxShadow": "0 16px 24px 2px rgba(255,255,255, .14), 0 6px 30px 5px rgba(255,255,255, .12), 0 8px 10px -5px rgba(255,255,255, .20)"
//       }
//     }
//   },
//   {
//     "boxShadow": {
//       "styler": {
//         "boxShadow": "0 24px 38px 3px rgba(255,255,255, .14), 0 9px 46px 8px rgba(255,255,255, .12), 0 11px 15px -7px rgba(255,255,255, .20)"
//       }
//     }
//   },
//   {
//     "boxShadow": {
//       "styler": {
//         "boxShadow": "0px 0px 1px rgba(255,255,255, .8),   0px 0px 2px rgba(255,255,255, .5),   0px 0px 3px rgba(255,255,255, .2),   0px 0px 1px rgba(224, 16, 116, 0.2),   0px 0px 2px rgba(224, 16, 116, 0.2),   0px 0px 3px rgba(224, 16, 116, 0.2),   0px 0px 4px rgba(224, 16, 116, 0.8),   0px 0px 6px rgba(224, 16, 116, 0.6),   0px 0px 8px rgba(224, 16, 116, 0.4),   0px 0px 16px rgba(224, 16, 116, 0.2),   0px 0px 20px 4px rgba(224, 16, 116, 0.2), inset  0px 0px 1px rgba(255,255,255, .8), inset 0px 0px 2px rgba(255,255,255, .5), inset 0px 0px 3px rgba(255,255,255, .2), inset 0px 0px 1px rgba(224, 16, 116, 0.2), inset 0px 0px 2px rgba(224, 16, 116, 0.2), inset 0px 0px 3px rgba(224, 16, 116, 0.2), inset 0px 0px 4px rgba(224, 16, 116, 0.8), inset 0px 0px 6px rgba(224, 16, 116, 0.6), inset  0px 0px 8px rgba(224, 16, 116, 0.4), inset 0px 0px 16px rgba(224, 16, 116, 0.2), inset 0px 0px 20px 4px rgba(224, 16, 116, 0.2)"
//       }
//     }
//   },
//   {
//     "boxShadow": {
//       "styler": {
//         "boxShadow": "   0px 0px 1px rgba(255,255,255, .8),   0px 0px 2px rgba(255,255,255, .5),   0px 0px 3px rgba(255,255,255, .2),   0px 0px 1px rgba(255,255,38, 0.2),   0px 0px 2px rgba(255,255,38, 0.2),   0px 0px 3px rgba(255,255,38, 0.2),   0px 0px 4px rgba(255,255,38, 0.8),   0px 0px 6px rgba(255,255,38, 0.6),   0px 0px 8px rgba(255,255,38, 0.4),   0px 0px 16px rgba(255,255,38, 0.2),   0px 0px 20px 4px rgba(255,255,38, 0.2), inset  0px 0px 1px rgba(255,255,255, .8), inset 0px 0px 2px rgba(255,255,255, .5), inset 0px 0px 3px rgba(255,255,255, .2), inset 0px 0px 1px rgba(255,255,38, 0.2), inset 0px 0px 2px rgba(255,255,38, 0.2), inset 0px 0px 3px rgba(255,255,38, 0.2), inset 0px 0px 4px rgba(255,255,38, 0.8), inset 0px 0px 6px rgba(255,255,38, 0.6), inset  0px 0px 8px rgba(255,255,38, 0.4), inset 0px 0px 16px rgba(255,255,38, 0.2), inset 0px 0px 20px 4px rgba(255,255,38, 0.2)"
//       }
//     }
//   },
//   {
//     "clearBackColor": {
//       "styler": {
//         "backgroundColor": "unset"
//       }
//     }
//   },
//   {
//     "clearForeColor": {
//       "styler": {
//         "color": "unset"
//       }
//     }
//   },
//   {
//     "clearImage": {
//       "styler": {
//         "backgroundImage": "none"
//       }
//     }
//   },
//   {
//     "contentType": {
//       "type": "navigation"
//     }
//   },
//   {
//     "contentType": {
//       "type": "display-4"
//     }
//   },
//   {
//     "contentType": {
//       "type": "display-3"
//     }
//   },
//   {
//     "contentType": {
//       "type": "display-2"
//     }
//   },
//   {
//     "contentType": {
//       "type": "display-1"
//     }
//   },
//   {
//     "contentType": {
//       "type": "headline"
//     }
//   },
//   {
//     "contentType": {
//       "type": "title"
//     }
//   },
//   {
//     "contentType": {
//       "type": "heading"
//     }
//   },
//   {
//     "contentType": {
//       "type": "subheading"
//     }
//   },
//   {
//     "contentType": {
//       "type": "lead"
//     }
//   },
//   {
//     "contentType": {
//       "type": "body"
//     }
//   },
//   {
//     "contentType": {
//       "type": "caption"
//     }
//   },
//   {
//     "contentType": {
//       "type": "image"
//     }
//   },
//   {
//     "contentType": {
//       "type": "button"
//     }
//   },
//   {
//     "contentType": {
//       "type": "iframe"
//     }
//   },
//   {
//     "contentType": {
//       "type": "signup"
//     }
//   },
//   {
//     "contentType": {
//       "type": "card"
//     }
//   },
//   {
//     "contentType": {
//       "type": "editor"
//     }
//   },
//   {
//     "contentType": {
//       "type": "card1to8"
//     }
//   },
//   {
//     "contentType": {
//       "type": "card9toN"
//     }
//   },
//   {
//     "contentType": {
//       "type": "basket-products"
//     }
//   },
//   {
//     "contentType": {
//       "type": "basket-total"
//     }
//   },
//   {
//     "contentType": {
//       "type": "basket-payment-card-element"
//     }
//   },
//   {
//     "contentType": {
//       "type": "basket-error-message"
//     }
//   },
//   {
//     "contentType": {
//       "type": "basket-pay-submit"
//     }
//   },
//   {
//     "contentType": {
//       "type": "basket-processing"
//     }
//   },
//   {
//     "contentType": {
//       "type": "product-stock"
//     }
//   },
//   {
//     "contentType": {
//       "type": "basket-product-qty"
//     }
//   },
//   {
//     "contentType": {
//       "type": "basket-reset"
//     }
//   },
//   {
//     "contentType": {
//       "type": "basket-paypal"
//     }
//   },
//   {
//     "contentType": {
//       "type": "basket-code"
//     }
//   },
//   {
//     "contentType": {
//       "type": "basket-charge"
//     }
//   },
//   {
//     "contentType": {
//       "type": "basket-payment-buttons"
//     }
//   },
//   {
//     "contentType": {
//       "type": "custom-typography"
//     }
//   },
//   {
//     "contentType": {
//       "type": "basket-payment"
//     }
//   },
//   {
//     "contentType": {
//       "type": "basket-stripe"
//     }
//   },
//   {
//     "contentType": {
//       "type": "e-voucher-add"
//     }
//   },
//   {
//     "contentType": {
//       "type": "add-to-cart-with-linked"
//     }
//   },
//   {
//     "contentType": {
//       "type": "component"
//     }
//   },
//   {
//     "customBinding": "inputValue"
//   },
//   {
//     "dataCreate": {
//       "data": {
//         "action": "create"
//       }
//     }
//   },
//   {
//     "dataEdit": {
//       "data": {
//         "action": "edit"
//       }
//     }
//   },
//   {
//     "dataFilter": {
//       "data": {
//         "action": "filter"
//       }
//     }
//   }
// ]

// final = this.data.reduce((acc,e)=>({...acc,[guid(16)]: e}),{})
