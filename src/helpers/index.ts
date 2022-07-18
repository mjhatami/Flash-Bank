import { sync } from 'glob'
import { union } from 'lodash'
import * as path from 'path'
import { forEach } from 'lodash'

export const globFiles = (location: string): string[] => {
  return union([], sync(location))
}


type Empty = undefined | null | never[] | never | '' ;

type NotEmpty = string | any[] | object | number;
export function isEmpty(value: Empty | NotEmpty): value is Empty {

  switch (typeof value) {
    case 'object':
        return value === null ? true : !Object.keys(value).length;
    case 'string':
        return !value.trim().length;
    default:
        return !value;
  }

}
