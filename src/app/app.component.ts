import { Component, QueryList, Input } from '@angular/core';
import { Post } from './types/Post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TP-Synthese';
  @Input() titletmp: string;
  @Input() contenttmp: string;
  posts: Post[];

  constructor() {
      this.posts = [];
      this.titletmp = "";
      this.contenttmp = "";
      this.posts.push( new Post( "Mon premier post", "Lorem ipsum ad vitam aeternam" ) );
      this.posts.push( new Post( "Mon deuxième post", "Lorem ipsum ad vitam" ) );
      this.posts.push( new Post( "Un autre post", "Lorem ipsum ad colore") );
  }

  @Input()
  public ajouterPost(): void {
      this.posts.push( new Post( this.titletmp, this.contenttmp ) );
  }

  public lirePost( id: number ): Post  { return this.posts[id]; }
  public lireNbPosts(): number { return this.posts.length; }
}
