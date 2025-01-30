export interface SendPaper {
  metaData: {
    title: string;
    authorId: string;
    field: string;
    publishedIn: string;
    keywords: string;
    abstract: string;
    DOI: string;
  }
  body :{
    content: string;
  }
}
