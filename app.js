(function () {
  var data = window.PORTFOLIO;
  if (!data || !data.profile) return;

  var p = data.profile;
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  function setText(id, text) {
    var el = document.getElementById(id);
    if (el && text) el.textContent = text;
  }

  setText("profile-name", p.name);
  setText("profile-title", p.title);
  setText("profile-summary", p.summary);
  setText("footer-name", p.name);
  setText("footer-title", p.title);

  var loc = document.getElementById("profile-location");
  if (loc && p.location && String(p.location).trim()) {
    loc.hidden = false;
    loc.textContent = p.location;
  }

  function renderLinks(containerId, links) {
    var ul = document.getElementById(containerId);
    if (!ul || !links) return;
    var visible = links.filter(function (l) {
      return l && l.href && String(l.href).trim() !== "";
    });
    visible.forEach(function (l) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = l.href;
      a.textContent = l.label || l.href;
      var h = String(l.href);
      if (h.indexOf("mailto:") === 0 || h.indexOf("tel:") === 0) {
        a.removeAttribute("target");
        a.removeAttribute("rel");
      } else {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
      li.appendChild(a);
      ul.appendChild(li);
    });
  }

  renderLinks("profile-links", p.links || []);
  renderLinks("footer-links", p.links || []);

  /* Experience */
  var expList = document.getElementById("experience-list");
  var experiences = data.experience || [];
  if (expList && experiences.length) {
    experiences.forEach(function (e) {
      var li = document.createElement("li");
      li.className = "exp-card";

      var top = document.createElement("div");
      top.className = "exp-top";

      var org = document.createElement("h3");
      org.className = "exp-org";
      org.textContent = e.org || "";
      top.appendChild(org);

      if (e.period) {
        var period = document.createElement("span");
        period.className = "exp-period";
        period.textContent = e.period;
        top.appendChild(period);
      }
      li.appendChild(top);

      if (e.role) {
        var role = document.createElement("p");
        role.className = "exp-role";
        role.textContent = e.role;
        li.appendChild(role);
      }

      if (e.summary) {
        var sum = document.createElement("p");
        sum.className = "exp-summary";
        sum.textContent = e.summary;
        li.appendChild(sum);
      }

      var initiatives = e.initiatives;
      if (initiatives && initiatives.length) {
        initiatives.forEach(function (init) {
          var block = document.createElement("div");
          block.className = "exp-initiative";

          var it = document.createElement("h4");
          it.className = "exp-init-title";
          it.textContent = init.title || "";
          block.appendChild(it);

          var bs = init.bullets;
          if (bs && bs.length) {
            var ulb = document.createElement("ul");
            ulb.className = "exp-init-bullets";
            bs.forEach(function (b) {
              var bli = document.createElement("li");
              bli.textContent = b;
              ulb.appendChild(bli);
            });
            block.appendChild(ulb);
          }

          if (init.stack) {
            var tech = document.createElement("p");
            tech.className = "exp-init-stack";
            tech.textContent = init.stack;
            block.appendChild(tech);
          }

          li.appendChild(block);
        });
      } else {
        var hl = e.highlights;
        if (hl && hl.length) {
          var ol = document.createElement("ul");
          ol.className = "exp-highlights";
          hl.forEach(function (item) {
            var itemLi = document.createElement("li");
            itemLi.textContent = item;
            ol.appendChild(itemLi);
          });
          li.appendChild(ol);
        }
      }

      expList.appendChild(li);
    });
  }

  /* Expertise */
  var grid = document.getElementById("expertise-grid");
  var expertise = data.expertise || [];
  if (grid && expertise.length) {
    expertise.forEach(function (block) {
      var col = document.createElement("div");
      col.className = "exp-col";
      var h = document.createElement("h3");
      h.textContent = block.label || "";
      col.appendChild(h);
      var ul = document.createElement("ul");
      (block.items || []).forEach(function (item) {
        var li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
      col.appendChild(ul);
      grid.appendChild(col);
    });
  }

  /* Projects */
  var list = document.getElementById("project-list");
  var projects = data.projects || [];
  if (list && projects.length) {
    projects.forEach(function (proj) {
      var li = document.createElement("li");
      li.className = "project-card";

      var title = document.createElement("h3");
      title.textContent = proj.title;
      li.appendChild(title);

      if (proj.role) {
        var meta = document.createElement("p");
        meta.className = "project-meta";
        meta.textContent = proj.role;
        li.appendChild(meta);
      }

      if (proj.summary) {
        var desc = document.createElement("p");
        desc.className = "project-desc";
        desc.textContent = proj.summary;
        li.appendChild(desc);
      }

      var ph = proj.highlights;
      if (ph && ph.length) {
        var ulh = document.createElement("ul");
        ulh.className = "project-highlights";
        ph.forEach(function (line) {
          var hi = document.createElement("li");
          hi.textContent = line;
          ulh.appendChild(hi);
        });
        li.appendChild(ulh);
      }

      if (proj.stack && proj.stack.length) {
        var badges = document.createElement("div");
        badges.className = "badge-row";
        proj.stack.forEach(function (tag) {
          var b = document.createElement("span");
          b.className = "badge";
          b.textContent = tag;
          badges.appendChild(b);
        });
        li.appendChild(badges);
      }

      var links = (proj.links || []).filter(function (l) {
        return l && l.href && String(l.href).trim() !== "";
      });
      if (links.length) {
        var ulp = document.createElement("ul");
        ulp.className = "project-links";
        links.forEach(function (l) {
          var item = document.createElement("li");
          var a = document.createElement("a");
          a.href = l.href;
          a.textContent = l.label || l.href;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          item.appendChild(a);
          ulp.appendChild(item);
        });
        li.appendChild(ulp);
      }

      list.appendChild(li);
    });
  }

  /* Education */
  var eduList = document.getElementById("education-list");
  var education = data.education || [];
  if (eduList && education.length) {
    education.forEach(function (ed) {
      var article = document.createElement("article");
      article.className = "edu-card";

      var row = document.createElement("div");
      row.className = "edu-top";
      var deg = document.createElement("h3");
      deg.className = "edu-degree";
      deg.textContent = ed.degree || "";
      row.appendChild(deg);
      if (ed.period) {
        var per = document.createElement("span");
        per.className = "edu-period";
        per.textContent = ed.period;
        row.appendChild(per);
      }
      article.appendChild(row);

      if (ed.school) {
        var sch = document.createElement("p");
        sch.className = "edu-school";
        sch.textContent = ed.school;
        article.appendChild(sch);
      }
      if (ed.detail) {
        var det = document.createElement("p");
        det.className = "edu-detail";
        det.textContent = ed.detail;
        article.appendChild(det);
      }

      eduList.appendChild(article);
    });
  }

  /* Certifications */
  var certWrap = document.getElementById("certifications-list");
  var certs = data.certifications || [];
  if (certWrap && certs.length) {
    var ulc = document.createElement("ul");
    ulc.className = "cert-list";
    certs.forEach(function (c) {
      var cli = document.createElement("li");
      cli.textContent = c;
      ulc.appendChild(cli);
    });
    certWrap.appendChild(ulc);
  }
})();
