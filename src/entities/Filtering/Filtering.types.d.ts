interface IFilteringProps {
  filteringInfo?: IFilteringInfo[];
  isNeedBtnMore?: boolean;
  filteringInfoNested?: IFilteringInfoNested[];
  isNested?: boolean;
  markOne?: boolean;
  priceScale?: boolean;
}

interface IFilteringInfo {
  title: string;
  items: string[] | Array<React.JSX.Element[] | string>;
}

interface IFilteringInfoNested {
  title: string;
  subTitles: IFilteringInfo[];
}

type IFilteringListItems = string[] | (string | React.JSX.Element[])[];
