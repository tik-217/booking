export interface IFilteringProps {
  filteringInfo?: IFilteringInfo[];
  isNeedBtnMore?: boolean;
  filteringInfoNested?: IFilteringInfoNested[];
  isNested?: boolean;
  markOne?: boolean;
  priceScale?: boolean;
}

export interface IFilteringInfo {
  title: string;
  items: string[];
}

export interface IFilteringInfoNested {
  title: string;
  subTitles: IFilteringInfo[];
}

export type IFilteringListItems = string[] | (string | React.JSX.Element[])[];
