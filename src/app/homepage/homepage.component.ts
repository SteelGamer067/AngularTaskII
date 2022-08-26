import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile, KeycloakRoles } from 'keycloak-js';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  /*private isLoggedIn: boolean = false;
  private perfiUsuario: KeycloakProfile | null = null;*/

  constructor(private readonly keyCloak: KeycloakService) { }

  ngOnInit(): void { }

  LoginUser(): void {
    this.keyCloak.login();
    //this.keyCloak.logout();
  }
}
