// personaje.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../personaje.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css'],
})
export class PersonajeComponent implements OnInit {
  character: any;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const characterId = +params['id'];

      this.characterService.getCharacterById(characterId).subscribe(
        (data) => {
          this.character = data;
          this.character.episode = this.character.episode.map((episodeUrl: string) =>
            this.extractEpisodeId(episodeUrl)
          );
        },
        (error) => {
          console.error('Error obteniendo información del personaje', error);
        }
      );
    });
  }

  private extractEpisodeId(episodeUrl: string): string {
    const parts = episodeUrl.split('/');
    return parts[parts.length - 1];
  }
}
