pre-push:
	yarn build

auto-push:
	git add .
	git commit -m "auto-commit"
	git push origin HEAD