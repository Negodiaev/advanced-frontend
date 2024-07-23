import { IStateSchema } from 'app/providers/StoreProvider';
import { getArticleData, getArticleIsLoading, getArticleError } from './articleSelectors';

const articleData = {
  id: '1',
  title: 'Some title...',
};

const error = 'Some error...';

describe('getArticleData', () => {
  test('should return article data', () => {
    const state: DeepPartial<IStateSchema> = {
      article: { data: articleData },
    };

    expect(getArticleData(state as IStateSchema)).toEqual(articleData);
  });

  test('should work with no data', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getArticleData(state as IStateSchema)).toEqual(undefined);
  });

  test('should return isLoading', () => {
    const state: DeepPartial<IStateSchema> = {
      article: { isLoading: true },
    };

    expect(getArticleIsLoading(state as IStateSchema)).toEqual(true);
  });

  test('should work isLoading with no data', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getArticleIsLoading(state as IStateSchema)).toEqual(false);
  });

  test('should return an error', () => {
    const state: DeepPartial<IStateSchema> = {
      article: { error },
    };

    expect(getArticleError(state as IStateSchema)).toEqual(error);
  });

  test('should work error with no data', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getArticleError(state as IStateSchema)).toEqual(undefined);
  });
});
