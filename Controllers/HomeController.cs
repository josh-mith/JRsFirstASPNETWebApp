using Microsoft.AspNetCore.Mvc;
using JRsFirstASPNETWebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JRsFirstASPNETWebApp.Controllers
{
    public class HomeController : Controller
    {
        //Home page
        public IActionResult Index()
        {
            return View();
        }

        //Grade Calc page
        [HttpGet("GradeCalc")]
        public IActionResult GradeCalc ()
        {
            return View();
        }

        //Return Grade Calc results from JS
        [HttpPost("GradeCalc")]
        public IActionResult GradeCalc (GradeCalcModel model)
        {
            return View();
        }
    }
}
