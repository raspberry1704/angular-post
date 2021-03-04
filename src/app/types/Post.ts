export class Post {
   private static ids = 0;
   private id: number;
   private title: string;
   private content: string;
   private loveIts: boolean;
   private created_at: Date;

   //constructor
   constructor( title: string, content: string ) {
       Post.ids += 1;
       this.id = Post.ids;
       this.title = title;
       this.content = content;
       this.loveIts = true;
       this.created_at = new Date();
   }

   /**
        Accesseurs
   */
   public lireTitle(): string { return this.title; }
   public lireContent(): string { return this.content; }
   public lireLoveIts(): boolean { return this.loveIts; }
   public lireCreatedAt(): Date { return this.created_at; }

   /**
        Mutateurs
   **/
   public ajouterLove(): void { this.loveIts = true; }
   public enleverLove(): void { this.loveIts = false }
}
