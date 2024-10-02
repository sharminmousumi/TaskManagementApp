import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TaskService } from './task.service';
import { Task } from '../models/task'; 
import { expect } from 'chai';

describe('TaskService', () => {
  let service: TaskService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [TaskService] 
    });

    service = TestBed.inject(TaskService); 
    httpMock = TestBed.inject(HttpTestingController); 
  });

  afterEach(() => {
    
    httpMock.verify();
  });

  describe('getTasks', () => {
    it('should return an array of tasks', (done) => {
      const mockTasks: Task[] = [
        { id: 1, title: 'Task 1', description: 'Description 1', createdDate: '2021-01-01', dueDate: '2021-01-05', isCompleted: false, user: 'user1' },
        { id: 2, title: 'Task 2', description: 'Description 2', createdDate: '2021-01-02', dueDate: '2021-01-06', isCompleted: true, user: 'user2' }
      ];

    
      service.getTasks().subscribe(tasks => {
        expect(tasks.length).to.equal(2); 
        expect(tasks).to.deep.equal(mockTasks); 
        done(); 
      });

      
      const req = httpMock.expectOne(`${service['controllerUrl']}`);
      expect(req.request.method).to.equal('GET'); 

      
      req.flush(mockTasks);
    });
  });
});
