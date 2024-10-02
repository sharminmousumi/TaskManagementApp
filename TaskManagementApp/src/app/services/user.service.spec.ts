import { inject, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { UserService } from './user.service';



describe('UserService', () =>
{
  beforeEach((async () =>
  {

    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        HttpClientModule
      ],
      providers: [HttpClientModule]
    }).compileComponents();

  }));

  describe('getUsers', () =>
  {
    it('should return an array of users', (inject([HttpClient], async (http) =>
    {
      const service = new UserService(http);
      

    })));
  });

  describe('getUser', () =>
  {
    it('should return a single user', (inject([HttpClient], async (http) =>
    {
      const service = new UserService(http);
      

    })));
  });

  describe('createUser', () =>
  {
    it('should return the new user', (inject([HttpClient], async (http) =>
    {
      const service = new UserService(http);
      

    })));
  });

  describe('updateUser', () =>
  {
    it('should return true', (inject([HttpClient], async (http) =>
    {
      const service = new UserService(http);
     

    })));
  });

  describe('deleteUser', () =>
  {
    it('should return true', (inject([HttpClient], async (http) =>
    {
      const service = new UserService(http);
      

    })));
  });

});
