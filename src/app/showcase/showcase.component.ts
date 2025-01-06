import {Component, OnInit} from '@angular/core';
import {GithubService} from '../github/github.service';
import {map, Repository} from '../github/repository';
import {NgForOf} from '@angular/common';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  imports: [
    NgForOf,
    Button,
  ]
})
export class ShowcaseComponent implements OnInit {

  repositories: Repository[] = [];

  constructor(private githubService: GithubService) {
  }

  ngOnInit(): void {
    this.githubService.getPinnedRepositories('LuizCasagrande')
      .subscribe(r => this.repositories = map(r)
        .filter(r => !r.isFork));
  }
}
