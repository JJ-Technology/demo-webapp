export class Keyword {
  KeywordId: number;
  CompanyId: number;
  KeywordValues: string;
  CreateDateTime: string;
  CreateUser: string;
  ModifyDateTime: string;
  ModifyUser: string;
  DeactivateDateTime: string;
  DeactivateUser: string;
  Company: pending;

  constructor(props) {
    this.KeywordId = props.KeywordId || null;
    this.CompanyId = props.CompanyId || null;
    this.KeywordValues = props.KeywordValues || null;
    this.CreateDateTime = props.CreateDateTime || null;
    this.CreateUser = props.CreateUser || null;
    this.ModifyDateTime = props.ModifyDateTime || null;
    this.ModifyUser = props.ModifyUser || null;
    this.DeactivateDateTime = props.DeactivateDateTime || null;
    this.DeactivateUser = props.DeactivateUser || null;
    this.Company = props.Company || pending;
  }
}
