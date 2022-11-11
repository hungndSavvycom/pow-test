export enum SpellComponentEnum {
  V = 'V',
  S = 'S',
  M = 'M',
}

export enum AreaEffectType {
  sphere = 'sphere',
  cone = 'cone',
  cylinder = 'cylinder',
  line = 'line',
}

export enum SchoolType {
  evocation = 'evocation',
  illusion = 'illusion',
}

export interface SpellObjectType {
  index: string;
  name: string;
  url: string;
}

export interface DamageType {
  damage_at_slot_level: {
    [x: string]: any;
  };
  damage_type: SpellObjectType;
}

export interface SpellDetailItem {
  _id: string;
  index: string;
  name: string;
  url: string;
  desc: string[];
  higher_level: string[];
  range: string;
  components: SpellComponentEnum[];
  material: string;
  area_of_effect?: {
    size: number;
    type: AreaEffectType;
  };
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  attack_type: string;
  damage: DamageType;
  school: SpellObjectType;
  classes: SpellObjectType[];
  subclasses: SpellObjectType[];
}

export interface SpellRequest {
  level?: number[];
  school?: SchoolType[];
}

export interface SpellDetailRequest {
  index: string | undefined;
}

export interface SpellDataResponse {
  count: number;
  results: SpellObjectType[];
}

export type FavouriteType = 'add' | 'remove';
