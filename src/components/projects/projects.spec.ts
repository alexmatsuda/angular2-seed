/* tslint:disable:no-unused-variable typedef */
import { Component } from 'angular2/angular2';
import {
  afterEach,
  beforeEach,
  describe,
  fdescribe,
  xdescribe,
  expect,
  it,
  fit,
  xit,
  beforeEachProviders,
  inject,
  injectAsync,
  TestComponentBuilder
} from 'angular2/testing';

import { AuthService } from '../../modules/auth/auth-service';
import { ProjectService } from '../../modules/project/project-service';
import { Projects } from './projects';


@Component({
  template: '',
  directives: [Projects]
})
class TestComponent {}


describe('Projects', () => {
  beforeEachProviders(() => [AuthService, ProjectService]);

  it('should display a list of projects', injectAsync([TestComponentBuilder], tcb => {
    return tcb.createAsync(Projects)
      .then(fixture => {
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;

        return fixture.debugElement.componentInstance.loaded.then(() => {
          fixture.detectChanges();
          expect(compiled.querySelectorAll('li').length).toBe(2);
        });
      });
  }));
});
