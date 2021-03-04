import { Component, Input, QueryList, OnInit } from '@angular/core';
import { Post } from '../types/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
    @Input() post: Post;

    constructor() {
        this.post = new Post( "", "");
    }

    ngOnInit(): void {
    }

    public ajouterLove(): void { this.post.ajouterLove(); }
    public enleverLove(): void { this.post.enleverLove(); }
}
