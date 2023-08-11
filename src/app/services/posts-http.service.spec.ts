import { TestBed } from '@angular/core/testing';

import { PostsHttpService } from './posts-http.service';

describe('PostsHttpService', () => {
  let service: PostsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a new post', () => {
    const post: Post = {
      id: 1,
      userId: 201,
      title: 'Test Post',
      body: 'This is a test post.',
    };

    service.create(post).subscribe((response) => {
      expect(response).toEqual(post);
    });
  });

  it('should retrieve a post by ID', () => {
    const postId = 1;
    const expectedPost: Post = {
      id: postId,
      userId: 201,
      title: 'Test Post',
      body: 'Test Content',
    };

    service.read(postId).subscribe((response) => {
      expect(response).toEqual(expectedPost);
    });
  });

  // Write similar test cases for readAll, update, and delete methods
});
