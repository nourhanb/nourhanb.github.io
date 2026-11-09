source "https://rubygems.org"

# Use the github-pages gem so local builds match GitHub Pages.
# Do not list plugins that are already bundled with github-pages
# (jekyll-feed, jekyll-sitemap, etc.) - that causes dependency conflicts.
gem "github-pages", group: :jekyll_plugins

gem "wdm", "~> 0.1.0" if Gem.win_platform?

# Local-only live-reload helper; not used by GitHub Pages.
group :development do
  gem "hawkins"
end
