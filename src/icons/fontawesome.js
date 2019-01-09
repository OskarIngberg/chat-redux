import { library, dom } from '@fortawesome/fontawesome-svg-core';

import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons/faCommentAlt';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons/faUserFriends';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle';

import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

library.add(faCheck);
library.add(faEnvelope);
library.add(faCommentAlt);
library.add(faUserFriends);
library.add(faUser);
library.add(faUserCircle);
dom.watch();
