interface GetServerSidePropsErrorDetail {
  message?: string,
  redirect?: string,
  code?: string
}
export class GetServerSidePropsError extends Error {
  constructor(errorDetail: GetServerSidePropsErrorDetail) {
    super(errorDetail.message);
  }
}
