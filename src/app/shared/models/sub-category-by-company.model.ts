export class SubCategoryByCompanyModel {
  SubCategoryByCompanyId: number;
  CompanyId: number;
  BussinessSubCategoryId: number;
  CreateDateTime: string;
  CreateUser: string;
  ModifyDateTime: string;
  ModifyUser: string;
  DeactivateDateTime: string;
  DeactiviateUser: string;
  BusinessSubCategory: pending;
  Company: pending;

  constructor(props) {
    this.SubCategoryByCompanyId = props.SubCategoryByCompanyId || null;
    this.CompanyId = props.CompanyId || null;
    this.BussinessSubCategoryId = props.BussinessSubCategoryId || null;
    this.CreateDateTime = props.CreateDateTime || null;
    this.CreateUser = props.CreateUser || null;
    this.ModifyDateTime = props.ModifyDateTime || null;
    this.ModifyUser = props.ModifyUser || null;
    this.DeactivateDateTime = props.DeactivateDateTime || null;
    this.DeactiviateUser = props.DeactiviateUser || null;
    this.BusinessSubCategory = props.BusinessSubCategory || pending;
    this.Company = props.Company || pending;
  }
}
