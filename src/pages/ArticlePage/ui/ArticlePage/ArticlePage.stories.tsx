import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { IArticle } from 'entities/Article';
import { ArticleBlockType, ArticleTopic } from 'entities/Article/model/types/article';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import ArticlePage from './ArticlePage';

const articleMock: IArticle = {
  id: '1',
  title: 'Lorem ipsum',
  subtitle: 'Dolor sit amet',
  img: 'https://wcanvas.com/wp-content/uploads/2023/04/IS-WORDPRESS-FRONTEND-OR-BACKEND-HERO-1024x451.jpg.webp',
  views: 2648,
  createdAt: '09.07.24',
  topics: [ArticleTopic.IT],
  content: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Block one title',
      text: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce diam mi, ornare at risus eu, dapibus accumsan elit. Etiam leo mi, luctus vitae mollis et, rhoncus ut purus. Maecenas fermentum tortor et tempor luctus. Nunc accumsan gravida urna ac ornare. Cras nisl nisi, consequat ut elit a, tristique eleifend massa. In hac habitasse platea dictumst. Praesent laoreet, orci in placerat cursus, erat eros tincidunt arcu, eget vulputate leo ligula a mauris. Morbi arcu libero, fringilla sagittis tellus a, feugiat tempus turpis. Praesent non tincidunt magna, id faucibus tellus. Suspendisse ornare pellentesque elit id volutpat. Sed cursus posuere fermentum. Nunc hendrerit diam velit, id elementum libero consectetur et. Nunc aliquet nulla et fermentum scelerisque.',
        'Fusce in risus quam. Integer eget porta tortor. Duis sapien quam, vulputate nec cursus vel, semper sed mi. Nulla malesuada diam nisl, ac suscipit felis egestas eu. Nullam orci diam, eleifend at nulla at, mollis vestibulum metus. Suspendisse potenti. Morbi sit amet metus gravida, auctor nulla id, accumsan eros. Sed molestie varius felis. Nam rhoncus sodales elit ac ornare. Cras ante magna, condimentum nec nunc a, tincidunt pretium orci.',
        'Nulla facilisi. Sed a lacinia tellus, et porta odio. Fusce in dolor vestibulum, tristique nunc eu, euismod est. Curabitur imperdiet, lorem ut interdum imperdiet, magna lacus semper nulla, quis placerat enim urna id risus. Integer non nisl in tellus egestas mollis auctor nec felis. Suspendisse fermentum lacinia dapibus. Phasellus bibendum, eros a rutrum sollicitudin, magna velit malesuada neque, et consequat nunc mi id sem. Maecenas quis imperdiet lorem. Ut et dui vehicula, cursus tellus vestibulum, rutrum eros.',
      ],
    },
    {
      id: '2',
      type: ArticleBlockType.CODE,
      code: 'var x = 1;\nlet y = 1;\n\nif (true) {\n  var x = 2;\n  let y = 2;\n}\n\nconsole.log(x);\n// Expected output: 2\n\nconsole.log(y);\n// Expected output: 1\n',
    },
    {
      id: '3',
      type: ArticleBlockType.TEXT,
      title: 'Block three title',
      text: [
        'Proin eu efficitur ipsum. Nullam sodales ligula est, id auctor nulla molestie molestie. Curabitur et erat massa. Praesent euismod varius nulla ac faucibus. Etiam nulla ipsum, volutpat eu magna id, gravida viverra elit. Donec massa velit, sagittis at justo et, fringilla congue nulla. Nulla facilisi.\n\n',
        'Ut scelerisque eros non eleifend venenatis. Pellentesque volutpat sollicitudin odio ut porta. Vestibulum vel odio luctus, finibus velit non, gravida dolor. Phasellus fermentum at tortor eu euismod. Proin vestibulum velit sem, ut mattis nunc consequat et. Nullam iaculis arcu vitae mauris pharetra molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi elit eros, congue non hendrerit et, suscipit sit amet metus. Maecenas at sollicitudin erat. Maecenas libero justo, pretium vitae felis in, aliquam eleifend felis. Praesent sit amet lectus dui. Vestibulum tincidunt augue et volutpat varius. Ut pellentesque, orci vitae luctus luctus, lectus magna consequat lectus, vitae tempus nisl erat nec neque. Nam sed est lectus.',
      ],
    },
    {
      id: '4',
      type: ArticleBlockType.IMAGE,
      src: 'https://www.hubspot.com/hs-fs/hubfs/how-to-start-coding-1.jpg?width=1190&height=800&name=how-to-start-coding-1.jpg',
      title: 'A person is coding',
    },
    {
      id: '5',
      type: ArticleBlockType.CODE,
      code: 'for (let i = 0; i < 10; i++) {\n  console.log(i);\n  console.log(i ** 2);\n}\n',
    },
    {
      id: '6',
      type: ArticleBlockType.TEXT,
      text: [
        'Proin eu efficitur ipsum. Nullam sodales ligula est, id auctor nulla molestie molestie. Curabitur et erat massa. Praesent euismod varius nulla ac faucibus. Etiam nulla ipsum, volutpat eu magna id, gravida viverra elit. Donec massa velit, sagittis at justo et, fringilla congue nulla. Nulla facilisi.\n\n',
        'Ut scelerisque eros non eleifend venenatis. Pellentesque volutpat sollicitudin odio ut porta. Vestibulum vel odio luctus, finibus velit non, gravida dolor. Phasellus fermentum at tortor eu euismod. Proin vestibulum velit sem, ut mattis nunc consequat et. Nullam iaculis arcu vitae mauris pharetra molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi elit eros, congue non hendrerit et, suscipit sit amet metus. Maecenas at sollicitudin erat. Maecenas libero justo, pretium vitae felis in, aliquam eleifend felis. Praesent sit amet lectus dui. Vestibulum tincidunt augue et volutpat varius. Ut pellentesque, orci vitae luctus luctus, lectus magna consequat lectus, vitae tempus nisl erat nec neque. Nam sed est lectus.\n\n',
        'Proin eu efficitur 124 234ipsum. Nullam sodales ligula est, id auctor nulla molest 123 412 4ie molestie. Curabitur et erat massa. Praesent euismod varius nulla ac faucibus. Etiam nulla ipsum, volutpat eu magna id, gravida viverra elit. Donec massa velit, sagittis at justo et, fringilla congue nulla. Nulla facilisi.\n\n',
        'Ut scelerisque eros non eleifend venenatis. Pellent 44 5674 7esque volutpat sollicitudin odio ut p 746 74567 orta. Vestibulum vel odio luctus, finibus velit non, gravida dolor. Phasellus fermentum at tortor eu euismod. Proin vestibulum velit sem, ut mattis nunc consequat et. Nullam iaculis arcu vitae mauris pharetra molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi elit eros, congue non hendrerit et, suscipit sit amet metus. Maecenas at sollicitudin erat. Maecenas libero justo, pretium vitae felis in, aliquam eleifend felis. Praesent sit amet lectus dui. Vestibulum tincidunt augue et volutpat varius. Ut pellentesque, orci vitae luctus luctus, lectus magna consequat lectus, vitae tempus nisl erat nec neque. Nam sed est lectus.',
      ],
    },
  ],
};

const meta: Meta<typeof ArticlePage> = {
  title: 'pages/ArticlePage',
  component: ArticlePage,
  decorators: [StoreDecorator({
    article: { data: articleMock },
  })],
};

export default meta;
type Story = StoryObj<typeof ArticlePage>;

export const Default: Story = {};

export const DefaultDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
