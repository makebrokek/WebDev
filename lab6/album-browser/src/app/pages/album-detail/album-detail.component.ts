import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album?: Album;
  editedTitle = '';
  loading = true;
  message = '';
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editedTitle = data.title;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load album';
        this.loading = false;
      }
    });
  }

  save(): void {
    if (!this.album) return;

    const updatedAlbum: Album = {
      ...this.album,
      title: this.editedTitle
    };

    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (data) => {
        this.album = data;
        this.message = 'Album title updated successfully';
      },
      error: () => {
        this.error = 'Failed to update album';
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}