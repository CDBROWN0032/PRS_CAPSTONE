using Newtonsoft.Json;
using PRScapstone.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PRScapstone.Utility
{

    public class JsonNetResult : JsonResult
    {/*
        private List<PurchaseRequestLineItem> list;
        private JsonRequestBehavior allowGet;
        
        public JsonNetResult(List<PurchaseRequestLineItem> list, JsonRequestBehavior allowGet)
        {
            this.list = list;
            this.allowGet = allowGet;
        }
        */
        public override void ExecuteResult(ControllerContext context)
        {
            HttpResponseBase response = context.HttpContext.Response;
            response.ContentType = "application/json";
            if (ContentEncoding != null)
                response.ContentEncoding = ContentEncoding;
            if (Data != null)
            {
                JsonTextWriter writer = new JsonTextWriter(response.Output) { Formatting = Formatting.Indented };
                JsonSerializerSettings serialzerSettings = new JsonSerializerSettings();
                serialzerSettings.DateFormatHandling = DateFormatHandling.IsoDateFormat;
                JsonSerializer serializer = JsonSerializer.Create(serialzerSettings);
                serializer.Serialize(writer, Data);
                writer.Flush();
            }
        }
    }
}