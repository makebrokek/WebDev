import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';
  private albumsCache: Album[] = [];
  private loaded = false;

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    if (this.loaded) {
      return of(this.albumsCache);
    }

    return this.http.get<Album[]>(`${this.apiUrl}/albums`).pipe(
      tap((albums) => {
        this.albumsCache = albums;
        this.loaded = true;
      })
    );
  }

  getAlbum(id: number): Observable<Album> {
    const cachedAlbum = this.albumsCache.find((album) => album.id === id);

    if (cachedAlbum) {
      return of(cachedAlbum);
    }

    return this.http.get<Album>(`${this.apiUrl}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.apiUrl}/albums/${id}/photos`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.apiUrl}/albums/${album.id}`, album).pipe(
      tap((updatedAlbum) => {
        this.albumsCache = this.albumsCache.map((a) =>
          a.id === updatedAlbum.id ? updatedAlbum : a
        );
      })
    );
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/albums/${id}`).pipe(
      tap(() => {
        this.albumsCache = this.albumsCache.filter((album) => album.id !== id);
      })
    );
  }
}