// personajes.component.ts

import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../personaje.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  characters: any[] = [];
  currentPage = 1;
  totalPages = 1;

  constructor(
    private characterService: CharacterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.characterService.getCharacters(this.currentPage)
      .subscribe((data: any) => {
        this.characters = data.results;
        this.totalPages = data.info.pages;

        // Navega a la parte superior de la página después de cambiar la página
        this.scrollToTop();
      });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getCharacters();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getCharacters();
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
