import { IStateSchema } from 'app/providers/StoreProvider';

export const getArticleData = (state: IStateSchema) => state.article?.data;
export const getArticleIsLoading = (state: IStateSchema) => state.article?.isLoading || false;
export const getArticleError = (state: IStateSchema) => state.article?.error;
