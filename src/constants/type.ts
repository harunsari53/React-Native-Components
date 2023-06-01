export interface IStyleProps {
  m?: number | string;
  ml?: number | string;
  mr?: number | string;
  mt?: number | string;
  mb?: number | string;
  p?: number | string;
  pl?: number | string;
  pr?: number | string;
  pt?: number | string;
  pb?: number | string;
  w?: number | string;
  h?: number | string;
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  flex?: number;
  backgroundColor?: string;
}
