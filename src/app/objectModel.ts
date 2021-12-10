import { throwError } from 'rxjs';
import { camelCase, groupBy, maxBy } from 'lodash';
import { getKind } from './getKind';
import { ModelEntries } from './data-model.service';


const modelGroup = (parent, obj) => {
  const keys = Object.keys(obj);

  return keys.reduce((prev, field) => {
    
    const property = obj[field];
    const kind = property ? getKind(property) : null;
    const key =''+camelCase(parent+'.'+field);
    // if (property === undefined || property === null) {
    //   return [...prev];
    // } else 
    if(kind==='array') {
      const entries = property && property[0] ? getKind(property[0]) : 'undefined';
      if(entries!=='object' && entries!=='array') {
        return [...prev,{key,parent,formType:kind,entryType:'control',valueType:entries,fieldName:field}]
      } else if(entries==='array') {
        return [...prev,{key,parent,formType:'error',field,state:'ERROR CANT HAVE ARRAY INSIDE AN ARRAY'}]
      }
      const itemModel = modelGroup(key,property[0])
      return [...prev,{key,parent,formType:kind,entryType:'group',valueType:key,fieldName:field},...itemModel] 
    } else if (kind==='object') {
      const objectModel = modelGroup(key,property)
      return [...prev,{key,parent,formType:'group',valueType:key, fieldName:field},...objectModel] 
    } else {
      return [...prev,{key,parent,formType:'control',valueType:kind,fieldName:field} ]
    }
  }, []);
};

const getModel = (modelRootName,modelPrototype):ModelEntries[] => {
  if (!Array.isArray(modelPrototype) && typeof modelPrototype === 'object') {
    const model = modelGroup(modelRootName, modelPrototype);
    
    return model
    // .map((x) => ({
    //   parent: x[0],
    //   key: x[1],
    //   type: x[2],
    //   of: x[3],
    // }));
  } else {
    return [];
  }
};
export default getModel;
