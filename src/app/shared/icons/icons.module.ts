import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';

import {
  faTrash,
  faSave,
  faEdit,
  faEyeSlash,
  faEye,
  faSearch,
  faArrowAltCircleLeft,
  faListUl,
  faTh,
  faUser,
  faUserGroup,
  faClock,
  faEnvelope,
  faMobileAlt,
  faUpload,
  faBell,
  faCar,
  faFileArchive,
  faFile,
  faFilePdf,
  faFileCirclePlus,
  faPrint,
  faPlus,
  faPen,
  faTimes,
  faLocationArrow,
  faInfoCircle,
  faShoppingCart,
  faSignInAlt,
  faSignOutAlt,
  faCheck,
  faLayerGroup,
  faHome,
  faUserFriends,
  faUsers,
  faUserPen,
  faInfo,
  faGear,
  faCalendarCheck,
  faPlay,
  faPause,
  faStar,
  faVolumeXmark,
  faVolumeHigh,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  imports: [CommonModule, FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class IconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faTrash,
      faSave,
      faEdit,
      faEyeSlash,
      faEye,
      faSearch,
      faArrowAltCircleLeft,
      faListUl,
      faTh,
      faUser,
      faUserGroup,
      faClock,
      faEnvelope,
      faMobileAlt,
      faUpload,
      faBell,
      faCar,
      faFileArchive,
      faFile,
      faFilePdf,
      faFileCirclePlus,
      faPrint,
      faPlus,
      faPen,
      faTimes,
      faLocationArrow,
      faInfoCircle,
      faShoppingCart,
      faSignInAlt,
      faSignOutAlt,
      faCheck,
      faLayerGroup,
      faHome,
      faUserFriends,
      faUsers,
      faUserPen,
      faInfo,
      faGear,
      faCalendarCheck,
      faPlay,
      faPause,
      faStar,
      faVolumeXmark,
      faVolumeHigh
    );
  }
}
