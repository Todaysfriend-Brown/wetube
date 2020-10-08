import passport from 'passport';
import GithubStrategy from 'passport-github';
import FacebookStrategy from 'passport-facebook';
import User from './models/User';
import {
	githubLoginCallback,
	facebookLoginCallback,
} from './controller/userController';
import routes from './routes';

passport.use(User.createStrategy());

passport.use(
	new GithubStrategy(
		{
			clientID: process.env.GH_ID,
			clientSecret: process.env.GH_SECRET,
			callbackURL: `http://localhost:4000${routes.githubCallback}`,
			profileFields: ['id', 'displayName', 'photos', 'email'],
			scope: ['public_profile', 'email'],
		},
		githubLoginCallback,
	),
);

passport.use(
	new FacebookStrategy(
		{
			clientID: process.env.FB_ID,
			clientSecret: process.env.FB_SECRET,
			callbackURL: `https://https://e476d5d9b515.ngrok.io${routes.facebookCallback}`,
		},
		facebookLoginCallback,
	),
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());