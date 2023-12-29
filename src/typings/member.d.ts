declare namespace Member {

  /** 学历：文盲、小学、初中、高中、专科、本科、硕士、博士 */
  type Education = 'illiteracy' | 'primary' | 'middle' | 'high' | 'technical' | 'bachelor' | 'master' | 'doctor';

  interface Member {
    id: number;
    gender: 'male' | 'female';
    name: string;
    age: number | null;
    height: number;
    weight: number;
    education: Education;
    phone: string;
    wechat?: string;
  }

  interface FetchParams {
    offset: number;
    count: number;
  }

}