import { IArticle } from './article';

export interface IArticleSchema {
    isLoading: boolean;
    data?: IArticle;
    error?: string;
}
