import React from 'react'

function AdminFooter() {
  return (
    <React.Fragment>
        {/* ======= Footer ======= */}
        <footer id="footer" className="footer">
          <div className="copyright">
            © Copyright <strong><span>Mr. Nirunzone</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ */}
            Designed by <a href="nirunzone@niran.com">Mr. Nirunzone</a>
          </div>
        </footer>{/* End Footer */}
        </React.Fragment>
  )
}

export default AdminFooter